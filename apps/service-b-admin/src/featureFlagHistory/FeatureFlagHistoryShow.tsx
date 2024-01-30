import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { FEATUREFLAGVALUE_TITLE_FIELD } from "../featureFlagValue/FeatureFlagValueTitle";

export const FeatureFlagHistoryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Old Value" source="oldValue" />
        <TextField label="New Value" source="newValue" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Flag Value"
          source="featureflagvalue.id"
          reference="FeatureFlagValue"
        >
          <TextField source={FEATUREFLAGVALUE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
