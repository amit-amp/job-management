import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FEATUREFLAG_TITLE_FIELD } from "./FeatureFlagTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const FeatureFlagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Description" source="description" />
        <TextField label="Type" source="type" />
        <ReferenceManyField
          reference="FeatureFlagValue"
          target="flagId"
          label="FeatureFlagValues"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
