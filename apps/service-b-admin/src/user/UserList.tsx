import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified" source="emailVerified" />
        <TextField label="Image" source="image" />
        <BooleanField
          label="Has Completed Onboarding"
          source="hasCompletedOnboarding"
        />
        <TextField label="Profession" source="profession" />
        <TextField label="Technologies" source="technologies" />
        <TextField
          label="Experience Level Flags"
          source="experienceLevelFlags"
        />
        <TextField
          label="Experience Level Tests"
          source="experienceLevelTests"
        />
      </Datagrid>
    </List>
  );
};
