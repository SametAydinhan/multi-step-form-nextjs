import { Suspense } from "react";
import { OnboardingForm } from "../onboarding-form";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingForm />
    </Suspense>
  );
}
