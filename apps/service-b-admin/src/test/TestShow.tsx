import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TEST_TITLE_FIELD } from "./TestTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const TestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <ReferenceManyField reference="Option" target="testId" label="Options">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Identifier" source="identifier" />
            <TextField label="Chance" source="chance" />
            <ReferenceField label="Test" source="test.id" reference="Test">
              <TextField source={TEST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Event" target="testId" label="Events">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField label="Test" source="test.id" reference="Test">
              <TextField source={TEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
            <TextField label="Selected Variant" source="selectedVariant" />
            <DateField source="createdAt" label="Created At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
