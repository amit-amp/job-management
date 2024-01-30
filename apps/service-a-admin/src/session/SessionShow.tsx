import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="SessionToken" source="sessionToken" />
        <TextField label="Expires" source="expires" />
        <TextField label="UserId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
