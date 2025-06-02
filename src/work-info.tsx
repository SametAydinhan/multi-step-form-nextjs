import React from "react";
import { Button, Field, Input, Stack } from "@chakra-ui/react";

const WorkInfo = () => {
  return (
    <form>
      <Stack gap='4'>
        <Field.Root>
          <Field.Label>Job Title</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Company Name</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Years of Experience</Field.Label>
          <Input />
        </Field.Root>
        <Button>Previous</Button>
        <Button type='submit'>Next</Button>
      </Stack>
    </form>
  );
};

export default WorkInfo;
