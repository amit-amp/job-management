import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Projects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Stripe Customer Id" source="stripeCustomerId" />
        <TextField
          label="Stripe Subscription Id"
          source="stripeSubscriptionId"
        />
        <TextField label="Stripe Price Id" source="stripePriceId" />
        <TextField label="Current Period End" source="currentPeriodEnd" />
      </Datagrid>
    </List>
  );
};
