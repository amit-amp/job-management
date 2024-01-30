import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { TestTitle } from "../test/TestTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="test.id" reference="Test" label="Test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Type Field" source="typeField" />
        <TextInput label="Selected Variant" source="selectedVariant" />
      </SimpleForm>
    </Edit>
  );
};
