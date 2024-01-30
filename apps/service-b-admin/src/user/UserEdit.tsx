import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectUserTitle } from "../projectUser/ProjectUserTitle";
import { ProjectInviteTitle } from "../projectInvite/ProjectInviteTitle";
import { FeatureFlagHistoryTitle } from "../featureFlagHistory/FeatureFlagHistoryTitle";
import { CouponCodeTitle } from "../couponCode/CouponCodeTitle";
import { ApiKeyTitle } from "../apiKey/ApiKeyTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Email Verified" source="emailVerified" />
        <TextInput label="Image" source="image" />
        <BooleanInput
          label="Has Completed Onboarding"
          source="hasCompletedOnboarding"
        />
        <TextInput label="Profession" source="profession" />
        <div />
        <NumberInput
          step={1}
          label="Experience Level Flags"
          source="experienceLevelFlags"
        />
        <NumberInput
          step={1}
          label="Experience Level Tests"
          source="experienceLevelTests"
        />
        <ReferenceArrayInput
          source="projects"
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
          source="featureFlagHistory"
          reference="FeatureFlagHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeatureFlagHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="couponCodes"
          reference="CouponCode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CouponCodeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="apiKeys"
          reference="ApiKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiKeyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
