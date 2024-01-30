import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VerificationTokenList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VerificationTokens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Identifier" source="identifier" />
        <TextField label="ID" source="id" />
        <TextField label="Expires" source="expires" />
      </Datagrid>
    </List>
  );
};
