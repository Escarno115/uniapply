import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded border bg-paper px-3.5 text-[15px] text-ink placeholder:text-ink-300",
        "border-ink-100 focus-visible:outline-none focus-visible:ring-0",
        invalid && "border-clay",
        className
      )}
      aria-invalid={invalid}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
