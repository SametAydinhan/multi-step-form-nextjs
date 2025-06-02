"use client";
import React from "react";
import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
interface FormValues {
  jobTitle: string;
  companyName: string;
  yearsOfExperience: string;
}
const formSchema = z.object({
    jobTitle: z.string().min(3, { message: "Please enter your job title" }),
    companyName: z.string().min(3, { message: "Please enter your company name" }),
    yearsOfExperience: z.string().min(1, { message: "Please enter your years of experience" }),
})

interface WorkInfoFormProps {
  onSubmit?: (data: FormValues) => void;
}
const WorkInfo = (props: WorkInfoFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    props.onSubmit?.(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap='4'>
        <Field.Root invalid={!!errors.jobTitle}>
          <Field.Label>Job Title</Field.Label>
          <Input {...register("jobTitle")} />
          <Field.ErrorText>{errors.jobTitle?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.companyName}>
          <Field.Label>Company Name</Field.Label>
          <Input {...register("companyName")} />
          <Field.ErrorText>{errors.companyName?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.yearsOfExperience}>
          <Field.Label>Years of Experience</Field.Label>
          <Input {...register("yearsOfExperience")} />
          <Field.ErrorText>{errors.yearsOfExperience?.message}</Field.ErrorText>
        </Field.Root>
        <Button>Previous</Button>
        <Button type='submit'>Next</Button>
      </Stack>
    </form>
  );
};

export default WorkInfo;
