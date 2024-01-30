import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="SessionToken" source="sessionToken" />
        <DateTimeInput label="Expires" source="expires" />
        <TextInput label="UserId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
