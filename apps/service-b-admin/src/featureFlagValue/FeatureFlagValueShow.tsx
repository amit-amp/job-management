import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { FEATUREFLAGVALUE_TITLE_FIELD } from "./FeatureFlagValueTitle";
import { FEATUREFLAG_TITLE_FIELD } from "../featureFlag/FeatureFlagTitle";

export const FeatureFlagValueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Flag"
          source="featureflag.id"
          reference="FeatureFlag"
        >
          <TextField source={FEATUREFLAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Value" source="value" />
        <TextField label="EnvironmentId" source="environmentId" />
        <ReferenceManyField
          reference="FeatureFlagHistory"
          target="flagValueId"
          label="FeatureFlagHistories"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
