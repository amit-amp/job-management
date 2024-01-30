import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
