"use client";

import { Box, Button, ButtonGroup, Heading, Steps } from "@chakra-ui/react";
import PersonelInfo from "./personel-info";
import WorkInfo from "./work-info";
import MoreDetails from "./more-details";
import { useState } from "react";

const steps = [
  { title: "Personal Information", id: "personal-info" },
  { title: "Work Info", id: "work-info" },
  { title: "More Details", id: "more-details" },
];

export function OnboardingForm() {
  const [step, setStep] = useState(0);

    const handleNext = () => {
        if (step < steps.length - 1) {
        setStep(step + 1);
        }
    };

  return (
    <Box padding={5} maxWidth='560px' mx='auto'>
      <Heading mb={4}>Onboarding Form</Heading>
      <Steps.Root step={step} onStepChange={(e) => setStep(e.step)} count={steps.length}>
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
          <PersonelInfo onSubmit={(data) => {
            handleNext();
            console.log("Personal Info Submitted:", data);
          }}/>
        </Steps.Content>

        <Steps.Content index={1}>
          <WorkInfo onSubmit={(data) => {
            handleNext();
            console.log("Work Info Submitted:", data);
          }}/>
        </Steps.Content>

        <Steps.Content index={2}>
          <MoreDetails onSubmit={(data) => {
            handleNext();
            console.log("More Details Submitted:", data);
          }}/>
        </Steps.Content>

        <Steps.CompletedContent>Thank you for completing the onboarding process!</Steps.CompletedContent>
      </Steps.Root>
    </Box>
  );
}
