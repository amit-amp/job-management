import { InputJsonValue } from "../../types";
import { ProjectUserUpdateManyWithoutUsersInput } from "./ProjectUserUpdateManyWithoutUsersInput";
import { ProjectInviteUpdateManyWithoutUsersInput } from "./ProjectInviteUpdateManyWithoutUsersInput";
import { FeatureFlagHistoryUpdateManyWithoutUsersInput } from "./FeatureFlagHistoryUpdateManyWithoutUsersInput";
import { CouponCodeUpdateManyWithoutUsersInput } from "./CouponCodeUpdateManyWithoutUsersInput";
import { ApiKeyUpdateManyWithoutUsersInput } from "./ApiKeyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  hasCompletedOnboarding?: boolean;
  profession?: string | null;
  technologies?: InputJsonValue;
  experienceLevelFlags?: number | null;
  experienceLevelTests?: number | null;
  projects?: ProjectUserUpdateManyWithoutUsersInput;
  invites?: ProjectInviteUpdateManyWithoutUsersInput;
  featureFlagHistory?: FeatureFlagHistoryUpdateManyWithoutUsersInput;
  couponCodes?: CouponCodeUpdateManyWithoutUsersInput;
  apiKeys?: ApiKeyUpdateManyWithoutUsersInput;
};
