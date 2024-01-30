import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="CreatedAt" />
        <DateField source="updatedAt" label="UpdatedAt" />
        <TextField label="Name" source="name" />
        <TextField label="ItemPrice" source="itemPrice" />
        <TextField label="Description" source="description" />
        <ReferenceManyField reference="Order" target="productId" label="Orders">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="CreatedAt" />
            <DateField source="updatedAt" label="UpdatedAt" />
            <TextField label="Quantity" source="quantity" />
            <TextField label="Discount" source="discount" />
            <TextField label="TotalPrice" source="totalPrice" />
            <TextField label="CustomerId" source="customerId" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
