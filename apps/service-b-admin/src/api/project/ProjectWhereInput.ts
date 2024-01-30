import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectUserListRelationFilter } from "../projectUser/ProjectUserListRelationFilter";
import { ProjectInviteListRelationFilter } from "../projectInvite/ProjectInviteListRelationFilter";
import { TestListRelationFilter } from "../test/TestListRelationFilter";
import { FeatureFlagListRelationFilter } from "../featureFlag/FeatureFlagListRelationFilter";
import { ApiRequestListRelationFilter } from "../apiRequest/ApiRequestListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  stripeCustomerId?: StringNullableFilter;
  stripeSubscriptionId?: StringNullableFilter;
  stripePriceId?: StringNullableFilter;
  currentPeriodEnd?: DateTimeFilter;
  users?: ProjectUserListRelationFilter;
  invites?: ProjectInviteListRelationFilter;
  tests?: TestListRelationFilter;
  featureFlags?: FeatureFlagListRelationFilter;
  apiRequests?: ApiRequestListRelationFilter;
};
