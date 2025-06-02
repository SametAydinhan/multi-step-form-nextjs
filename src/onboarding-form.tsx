"use client";

import { Box,  Heading, Steps } from "@chakra-ui/react";
import PersonelInfo from "./personel-info";
import WorkInfo from "./work-info";
import MoreDetails from "./more-details";
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  { title: "Personal Information", id: "personal-info" },
  { title: "Work Info", id: "work-info" },
  { title: "More Details", id: "more-details" },
];

export function OnboardingForm() {
  const searchParams = useSearchParams();
  const stepId = searchParams.get("step");

  let step = steps.findIndex((s) => s.id === stepId);
  if (step === -1) {
    step = 0; // Default to the first step if not found
  }
  if(stepId === 'done') step = steps.length; // If 'done' is specified, go to the last step

  const router = useRouter();


  const handleNext = () => {
    const nextStep = steps[step + 1];
    router.push(`?step=${nextStep?.id ?? 'done'}`);
  };

  const goToStep = (step: number) => {
    const nextStep = steps[step];
    if (nextStep) {
        router.push(`?step=${nextStep.id}`);
    } 
  }


  return (
    <Box padding={5} maxWidth='560px' mx='auto'>
      <Heading mb={4}>Onboarding Form</Heading>
      <Steps.Root
        step={step}
        onStepChange={(e) => goToStep(e.step)}
        count={steps.length}
      >
        <Steps.List>
          {steps.map((step, index) => (
            <Steps.Item key={index} index={index} title={step.title}>
              <Steps.Indicator />
              <Steps.Title>{step.title}</Steps.Title>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        <Steps.Content index={0}>
          <PersonelInfo
            onSubmit={(data) => {
              handleNext();
              console.log("Personal Info Submitted:", data);
            }}
          />
        </Steps.Content>

        <Steps.Content index={1}>
          <WorkInfo
            onSubmit={(data) => {
              handleNext();
              console.log("Work Info Submitted:", data);
            }}
          />
        </Steps.Content>

        <Steps.Content index={2}>
          <MoreDetails
            onSubmit={(data) => {
              handleNext();
              console.log("More Details Submitted:", data);
            }}
          />
        </Steps.Content>

        <Steps.CompletedContent>
          Thank you for completing the onboarding process!
        </Steps.CompletedContent>
      </Steps.Root>
    </Box>
  );
}
