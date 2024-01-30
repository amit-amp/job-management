import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="TypeField" source="typeField" />
        <TextInput label="Provider" source="provider" />
        <TextInput label="ProviderAccountId" source="providerAccountId" />
        <TextInput label="RefreshToken" source="refreshToken" />
        <TextInput label="AccessToken" source="accessToken" />
        <NumberInput
          step={1}
          label="RefreshTokenExpiresIn"
          source="refreshTokenExpiresIn"
        />
        <NumberInput step={1} label="ExpiresAt" source="expiresAt" />
        <TextInput label="TokenType" source="tokenType" />
        <TextInput label="Scope" source="scope" />
        <TextInput label="IdToken" source="idToken" />
        <TextInput label="SessionState" source="sessionState" />
        <TextInput label="UserId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
