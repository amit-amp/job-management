import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="TypeField" source="typeField" />
        <TextField label="Provider" source="provider" />
        <TextField label="ProviderAccountId" source="providerAccountId" />
        <TextField label="RefreshToken" source="refreshToken" />
        <TextField label="AccessToken" source="accessToken" />
        <TextField
          label="RefreshTokenExpiresIn"
          source="refreshTokenExpiresIn"
        />
        <TextField label="ExpiresAt" source="expiresAt" />
        <TextField label="TokenType" source="tokenType" />
        <TextField label="Scope" source="scope" />
        <TextField label="IdToken" source="idToken" />
        <TextField label="SessionState" source="sessionState" />
        <TextField label="UserId" source="userId" />
      </Datagrid>
    </List>
  );
};
