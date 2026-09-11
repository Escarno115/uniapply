import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number; // 0-indexed
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <ol className="flex items-center gap-3">
      {steps.map((label, i) => {
        const state = i < currentStep ? "done" : i === currentStep ? "active" : "upcoming";
        return (
          <li key={label} className="flex flex-1 items-center gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                  state === "done" && "bg-sage text-paper",
                  state === "active" && "bg-ink text-paper",
                  state === "upcoming" && "bg-ink-50 text-ink-300"
                )}
              >
                {state === "done" ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span
                className={cn(
                  "hidden text-sm font-medium sm:inline",
                  state === "upcoming" ? "text-ink-300" : "text-ink-700"
                )}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn("h-px flex-1", state === "done" ? "bg-sage" : "bg-ink-100")} />
            )}
          </li>
        );
      })}
    </ol>
  );
}
