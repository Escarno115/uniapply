import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ProfileValues } from "@/lib/validations/profile";
import { UploadCloud } from "lucide-react";

export function AcademicStep({ form }: { form: UseFormReturn<ProfileValues> }) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-ink-900">Your academic background</h2>
        <p className="mt-1 text-sm text-ink-500">We'll match this to each school's requirements automatically.</p>
      </div>

      <div>
        <Label htmlFor="schoolName">Current or most recent school</Label>
        <Input id="schoolName" invalid={!!errors.schoolName} {...register("schoolName")} />
        {errors.schoolName && <p className="mt-1.5 text-xs text-clay">{errors.schoolName.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="graduationYear">Graduation year</Label>
          <Input id="graduationYear" placeholder="2027" invalid={!!errors.graduationYear} {...register("graduationYear")} />
          {errors.graduationYear && <p className="mt-1.5 text-xs text-clay">{errors.graduationYear.message}</p>}
        </div>
        <div>
          <Label htmlFor="gpa">GPA (optional)</Label>
          <Input id="gpa" placeholder="3.8" invalid={!!errors.gpa} {...register("gpa")} />
          {errors.gpa && <p className="mt-1.5 text-xs text-clay">{errors.gpa.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="testScore">Standardized test score (optional)</Label>
        <Input id="testScore" placeholder="e.g. SAT 1420" {...register("testScore")} />
      </div>

      <div>
        <Label>Transcript</Label>
        <div className="flex items-center gap-3 rounded border border-dashed border-ink-100 px-4 py-5 text-sm text-ink-500">
          <UploadCloud className="h-5 w-5 text-ink-300" />
          <span>Drag a file here, or <span className="font-medium text-ink underline underline-offset-2">browse</span></span>
          <input type="file" className="sr-only" aria-label="Upload transcript" />
        </div>
      </div>
    </div>
  );
}
