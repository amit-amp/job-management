import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FeatureFlagTitle } from "../featureFlag/FeatureFlagTitle";
import { FeatureFlagHistoryTitle } from "../featureFlagHistory/FeatureFlagHistoryTitle";

export const FeatureFlagValueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
