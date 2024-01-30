import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProjectUserListRelationFilter } from "../projectUser/ProjectUserListRelationFilter";
import { ProjectInviteListRelationFilter } from "../projectInvite/ProjectInviteListRelationFilter";
import { FeatureFlagHistoryListRelationFilter } from "../featureFlagHistory/FeatureFlagHistoryListRelationFilter";
import { CouponCodeListRelationFilter } from "../couponCode/CouponCodeListRelationFilter";
import { ApiKeyListRelationFilter } from "../apiKey/ApiKeyListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  emailVerified?: DateTimeNullableFilter;
  image?: StringNullableFilter;
  hasCompletedOnboarding?: BooleanFilter;
  profession?: StringNullableFilter;
  technologies?: JsonFilter;
  experienceLevelFlags?: IntNullableFilter;
  experienceLevelTests?: IntNullableFilter;
  projects?: ProjectUserListRelationFilter;
  invites?: ProjectInviteListRelationFilter;
  featureFlagHistory?: FeatureFlagHistoryListRelationFilter;
  couponCodes?: CouponCodeListRelationFilter;
  apiKeys?: ApiKeyListRelationFilter;
};
