import React from 'react'
import { Button, Field, Input, Stack } from "@chakra-ui/react";

const PersonelInfo = () => {
  return (
    <form>
      <Stack gap='4' >
        <Field.Root>
          <Field.Label>First Name</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Last Name</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email Address</Field.Label>
          <Input type='email' />
        </Field.Root>
        <Field.Root>
          <Field.Label>Phone Number</Field.Label>
          <Input />
        </Field.Root>
        <Button type='submit'>Next</Button>
      </Stack>
    </form>
  );
}

export default PersonelInfo