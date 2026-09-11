import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[140px] w-full rounded border bg-paper px-3.5 py-3 text-[15px] text-ink placeholder:text-ink-300",
        "border-ink-100 focus-visible:outline-none",
        invalid && "border-clay",
        className
      )}
      aria-invalid={invalid}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
