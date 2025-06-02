"use client";
import React from "react";
import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
const formSchema = z.object({
  firstName: z.string().min(3, { message: "Please enter your first name" }),
  lastName: z.string().min(3, { message: "Please enter your last name" }),
  email: z.string().email(),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
});
interface PersonelInfoProps {
  onSubmit?: (data: FormValues) => void;
}
const PersonelInfo = (props: PersonelInfoProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    props.onSubmit?.(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap='4'>
        <Field.Root invalid={!!errors.firstName}>
          <Field.Label>First Name</Field.Label>
          <Input {...register("firstName")} />
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.lastName}>
          <Field.Label>Last Name</Field.Label>
          <Input {...register("lastName")} />
          <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.email}>
          <Field.Label>Email Address</Field.Label>
          <Input type='email' {...register("email")} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.phone}>
          <Field.Label>Phone Number</Field.Label>
          <Input {...register("phone")} />
          <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
        </Field.Root>
        <Button type='submit'>Next</Button>
      </Stack>
    </form>
  );
};

export default PersonelInfo;
