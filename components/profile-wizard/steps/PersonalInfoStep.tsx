import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ProfileValues } from "@/lib/validations/profile";

export function PersonalInfoStep({ form }: { form: UseFormReturn<ProfileValues> }) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-ink-900">Who are you?</h2>
        <p className="mt-1 text-sm text-ink-500">This appears on every application you submit.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" invalid={!!errors.firstName} {...register("firstName")} />
          {errors.firstName && <p className="mt-1.5 text-xs text-clay">{errors.firstName.message}</p>}
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" invalid={!!errors.lastName} {...register("lastName")} />
          {errors.lastName && <p className="mt-1.5 text-xs text-clay">{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" invalid={!!errors.email} {...register("email")} />
        {errors.email && <p className="mt-1.5 text-xs text-clay">{errors.email.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" invalid={!!errors.phone} {...register("phone")} />
          {errors.phone && <p className="mt-1.5 text-xs text-clay">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="dateOfBirth">Date of birth</Label>
          <Input id="dateOfBirth" type="date" invalid={!!errors.dateOfBirth} {...register("dateOfBirth")} />
          {errors.dateOfBirth && <p className="mt-1.5 text-xs text-clay">{errors.dateOfBirth.message}</p>}
        </div>
      </div>
    </div>
  );
}
