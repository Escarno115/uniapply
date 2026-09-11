import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProfileValues } from "@/lib/validations/profile";

export function EssayStep({ form }: { form: UseFormReturn<ProfileValues> }) {
  const { register, watch, formState: { errors } } = form;
  const length = watch("personalStatement")?.length ?? 0;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-ink-900">Your personal statement</h2>
        <p className="mt-1 text-sm text-ink-500">
          Most schools accept this as-is. A few ask for a shorter, school-specific version later.
        </p>
      </div>

      <div>
        <Label htmlFor="personalStatement">Personal statement</Label>
        <Textarea
          id="personalStatement"
          invalid={!!errors.personalStatement}
          {...register("personalStatement")}
        />
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-xs text-clay">{errors.personalStatement?.message}</span>
          <span className="text-xs text-ink-300">{length} / 6500</span>
        </div>
      </div>
    </div>
  );
}
