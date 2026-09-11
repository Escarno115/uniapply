"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/StepIndicator";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { AcademicStep } from "./steps/AcademicStep";
import { EssayStep } from "./steps/EssayStep";
import { profileSchema, stepSchemas, ProfileValues } from "@/lib/validations/profile";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const STEP_LABELS = ["Personal", "Academic", "Statement"];

// Which form fields belong to each step, so we can validate one step at a time
const STEP_FIELDS: (keyof ProfileValues)[][] = [
  ["firstName", "lastName", "email", "phone", "dateOfBirth"],
  ["schoolName", "graduationYear", "gpa", "testScore"],
  ["personalStatement"],
];

export function ProfileWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      schoolName: "",
      graduationYear: "",
      gpa: "",
      testScore: "",
      personalStatement: "",
    },
  });

  const isLastStep = step === STEP_LABELS.length - 1;

  async function goNext() {
    const valid = await form.trigger(STEP_FIELDS[step]);
    if (!valid) return;
    if (isLastStep) {
      form.handleSubmit(onSubmit)();
    } else {
      setStep((s) => s + 1);
    }
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function onSubmit(values: ProfileValues) {
    // In a real app: persist to your backend / Supabase here.
    console.log("Profile saved", values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="mx-auto max-w-xl">
        <CardContent className="flex flex-col items-center gap-4 py-14 text-center">
          <CheckCircle2 className="h-10 w-10 text-sage" />
          <h2 className="text-xl font-semibold text-ink-900">Your profile is saved</h2>
          <p className="max-w-[38ch] text-sm text-ink-500">
            Next, choose the schools you're applying to — we'll carry this profile into each one.
          </p>
          <Button variant="brass" size="lg" onClick={() => (window.location.href = "/universities")}>
            Choose your schools
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <StepIndicator steps={STEP_LABELS} currentStep={step} />
      </div>

      <Card>
        <CardContent className="py-8">
          {step === 0 && <PersonalInfoStep form={form} />}
          {step === 1 && <AcademicStep form={form} />}
          {step === 2 && <EssayStep form={form} />}
        </CardContent>
      </Card>

      <div className="mt-6 flex items-center justify-between">
        <Button variant="ghost" onClick={goBack} disabled={step === 0}>
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <Button variant="brass" onClick={goNext}>
          {isLastStep ? "Save profile" : "Continue"}
          {!isLastStep && <ArrowRight className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
