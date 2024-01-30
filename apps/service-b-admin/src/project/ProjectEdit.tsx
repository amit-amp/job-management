import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectUserTitle } from "../projectUser/ProjectUserTitle";
import { ProjectInviteTitle } from "../projectInvite/ProjectInviteTitle";
import { TestTitle } from "../test/TestTitle";
import { FeatureFlagTitle } from "../featureFlag/FeatureFlagTitle";
import { ApiRequestTitle } from "../apiRequest/ApiRequestTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Stripe Customer Id" source="stripeCustomerId" />
        <TextInput
          label="Stripe Subscription Id"
          source="stripeSubscriptionId"
        />
        <TextInput label="Stripe Price Id" source="stripePriceId" />
        <DateTimeInput label="Current Period End" source="currentPeriodEnd" />
        <ReferenceArrayInput
          source="users"
          reference="ProjectUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectUserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invites"
          reference="ProjectInvite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectInviteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tests"
          reference="Test"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="featureFlags"
          reference="FeatureFlag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeatureFlagTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="apiRequests"
          reference="ApiRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
