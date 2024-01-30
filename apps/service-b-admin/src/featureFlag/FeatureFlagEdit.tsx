import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";
import { FeatureFlagValueTitle } from "../featureFlagValue/FeatureFlagValueTitle";

export const FeatureFlagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput label="Description" source="description" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "BOOLEAN", value: "BOOLEAN" },
            { label: "STRING", value: "STRING" },
            { label: "NUMBER", value: "NUMBER" },
            { label: "JSON", value: "JSON" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="values"
          reference="FeatureFlagValue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeatureFlagValueTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
