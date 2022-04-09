import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Created", value: "Created" },
            { label: "Accepted", value: "Accepted" },
            { label: "In Progress", value: "InProgress" },
            { label: "Completed", value: "Completed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
