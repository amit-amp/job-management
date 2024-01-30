import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const VerificationTokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Identifier" source="identifier" />
        <DateTimeInput label="Expires" source="expires" />
      </SimpleForm>
    </Edit>
  );
};
