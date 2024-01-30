import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { FeatureFlagValueTitle } from "../featureFlagValue/FeatureFlagValueTitle";

export const FeatureFlagHistoryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Old Value" source="oldValue" />
        <TextInput label="New Value" source="newValue" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="flagValue.id"
          reference="FeatureFlagValue"
          label="Flag Value"
        >
          <SelectInput optionText={FeatureFlagValueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
