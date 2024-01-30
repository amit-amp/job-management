import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  DateField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { FEATUREFLAGVALUE_TITLE_FIELD } from "../featureFlagValue/FeatureFlagValueTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ProjectUser"
          target="userId"
          label="ProjectUsers"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Role" source="role" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProjectInvite"
          target="userId"
          label="ProjectInvites"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Email" source="email" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Used At" source="usedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FeatureFlagHistory"
          target="userId"
          label="FeatureFlagHistories"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Old Value" source="oldValue" />
            <TextField label="New Value" source="newValue" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Flag Value"
              source="featureflagvalue.id"
              reference="FeatureFlagValue"
            >
              <TextField source={FEATUREFLAGVALUE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CouponCode"
          target="redeemedById"
          label="CouponCodes"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Code" source="code" />
            <TextField label="Stripe Price Id" source="stripePriceId" />
            <TextField label="Redeemed At" source="redeemedAt" />
            <ReferenceField
              label="Redeemed By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="ApiKey" target="userId" label="ApiKeys">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Hashed Key" source="hashedKey" />
            <TextField label="Valid Until" source="validUntil" />
            <TextField label="Revoked At" source="revokedAt" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
