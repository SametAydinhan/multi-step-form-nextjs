import React from "react";
import { Button, Field, Input, NativeSelect, Stack, Textarea } from "@chakra-ui/react";

const MoreDetails = () => {
  return (
    <form>
      <Stack gap='4'>
        <Field.Root>
          <Field.Label>Career Goal</Field.Label>
          <Textarea />
        </Field.Root>
        <Field.Root>
          <Field.Label>Learning Style</Field.Label>
          <NativeSelect.Root size='sm' width='240px'>
            <NativeSelect.Field placeholder='Select option'>
              <option value='videos'>Videos Courses</option>
              <option value='reading'>Reading Articles</option>
              <option value='hands-on'>Hands-on Projects</option>
              <option value='live'>Live Workshops</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Button>Previous</Button>
        <Button type='submit'>Next</Button>
      </Stack>
    </form>
  );
};

export default MoreDetails;
