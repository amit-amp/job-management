import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="whatever" source="whatever" />
      </SimpleForm>
    </Edit>
  );
};
