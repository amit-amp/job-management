import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="CreatedAt" />
        <DateField source="updatedAt" label="UpdatedAt" />
        <TextField label="Name" source="name" />
        <TextField label="ItemPrice" source="itemPrice" />
        <TextField label="Description" source="description" />
      </Datagrid>
    </List>
  );
};
