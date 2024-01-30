import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FEATUREFLAG_TITLE_FIELD } from "../featureFlag/FeatureFlagTitle";

export const FeatureFlagValueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FeatureFlagValues"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
