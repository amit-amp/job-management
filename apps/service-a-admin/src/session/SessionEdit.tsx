import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="SessionToken" source="sessionToken" />
        <DateTimeInput label="Expires" source="expires" />
        <TextInput label="UserId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
