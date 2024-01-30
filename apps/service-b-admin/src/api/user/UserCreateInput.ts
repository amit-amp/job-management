import { InputJsonValue } from "../../types";
import { ProjectUserCreateNestedManyWithoutUsersInput } from "./ProjectUserCreateNestedManyWithoutUsersInput";
import { ProjectInviteCreateNestedManyWithoutUsersInput } from "./ProjectInviteCreateNestedManyWithoutUsersInput";
import { FeatureFlagHistoryCreateNestedManyWithoutUsersInput } from "./FeatureFlagHistoryCreateNestedManyWithoutUsersInput";
import { CouponCodeCreateNestedManyWithoutUsersInput } from "./CouponCodeCreateNestedManyWithoutUsersInput";
import { ApiKeyCreateNestedManyWithoutUsersInput } from "./ApiKeyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  hasCompletedOnboarding: boolean;
  profession?: string | null;
  technologies?: InputJsonValue;
  experienceLevelFlags?: number | null;
  experienceLevelTests?: number | null;
  projects?: ProjectUserCreateNestedManyWithoutUsersInput;
  invites?: ProjectInviteCreateNestedManyWithoutUsersInput;
  featureFlagHistory?: FeatureFlagHistoryCreateNestedManyWithoutUsersInput;
  couponCodes?: CouponCodeCreateNestedManyWithoutUsersInput;
  apiKeys?: ApiKeyCreateNestedManyWithoutUsersInput;
};
