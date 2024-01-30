import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";
import { ProjectTitle } from "../project/ProjectTitle";

export const ApiRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "GET_CONFIG", value: "GET_CONFIG" },
            { label: "GET_CONFIG_SCRIPT", value: "GET_CONFIG_SCRIPT" },
            { label: "TRACK_VIEW", value: "TRACK_VIEW" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Duration In Ms" source="durationInMs" />
        <SelectInput
          source="apiVersion"
          label="Api Version"
          choices={[
            { label: "V0", value: "V0" },
            { label: "V1", value: "V1" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
