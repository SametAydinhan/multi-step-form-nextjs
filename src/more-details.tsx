"use client";
import React from "react";
import {
  Button,
  Field,
  Input,
  NativeSelect,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  careerGoal: string;
  learningStyle: string;
}
const formSchema = z.object({
  careerGoal: z.string().min(5, { message: "Please enter your career goal" }),
  learningStyle: z
    .string()
    .min(1, { message: "Please select a learning style" }),
});

interface MoreDetailsFormProps {
  onSubmit?: (data: FormValues) => void;
}

const MoreDetails = (props: MoreDetailsFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    props.onSubmit?.(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap='4'>
        <Field.Root invalid={!!errors.careerGoal}>
          <Field.Label>Career Goal</Field.Label>
          <Textarea {...register("careerGoal")} />
          <Field.ErrorText>{errors.careerGoal?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.learningStyle}>
          <Field.Label>Learning Style</Field.Label>
          <NativeSelect.Root size='sm' width='240px'>
            <NativeSelect.Field placeholder='Select option' {...register("learningStyle")}>
              <option value='videos'>Videos Courses</option>
              <option value='reading'>Reading Articles</option>
              <option value='hands-on'>Hands-on Projects</option>
              <option value='live'>Live Workshops</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
          <Field.ErrorText>{errors.learningStyle?.message}</Field.ErrorText>
        </Field.Root>
        <Button>Previous</Button>
        <Button type='submit'>Next</Button>
      </Stack>
    </form>
  );
};

export default MoreDetails;
