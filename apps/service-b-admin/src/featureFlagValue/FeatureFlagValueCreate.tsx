import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FeatureFlagTitle } from "../featureFlag/FeatureFlagTitle";
import { FeatureFlagHistoryTitle } from "../featureFlagHistory/FeatureFlagHistoryTitle";

export const FeatureFlagValueCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="flag.id" reference="FeatureFlag" label="Flag">
          <SelectInput optionText={FeatureFlagTitle} />
        </ReferenceInput>
        <TextInput label="Value" source="value" />
        <ReferenceArrayInput
          source="history"
          reference="FeatureFlagHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeatureFlagHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="EnvironmentId" source="environmentId" />
      </SimpleForm>
    </Create>
  );
};
