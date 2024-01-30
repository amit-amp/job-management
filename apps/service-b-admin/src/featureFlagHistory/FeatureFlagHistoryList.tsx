import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { FEATUREFLAGVALUE_TITLE_FIELD } from "../featureFlagValue/FeatureFlagValueTitle";

export const FeatureFlagHistoryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FeatureFlagHistories"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
