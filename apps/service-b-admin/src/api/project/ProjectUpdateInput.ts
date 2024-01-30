import { ProjectUserUpdateManyWithoutProjectsInput } from "./ProjectUserUpdateManyWithoutProjectsInput";
import { ProjectInviteUpdateManyWithoutProjectsInput } from "./ProjectInviteUpdateManyWithoutProjectsInput";
import { TestUpdateManyWithoutProjectsInput } from "./TestUpdateManyWithoutProjectsInput";
import { FeatureFlagUpdateManyWithoutProjectsInput } from "./FeatureFlagUpdateManyWithoutProjectsInput";
import { ApiRequestUpdateManyWithoutProjectsInput } from "./ApiRequestUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  name?: string;
  stripeCustomerId?: string | null;
  stripeSubscriptionId?: string | null;
  stripePriceId?: string | null;
  currentPeriodEnd?: Date;
  users?: ProjectUserUpdateManyWithoutProjectsInput;
  invites?: ProjectInviteUpdateManyWithoutProjectsInput;
  tests?: TestUpdateManyWithoutProjectsInput;
  featureFlags?: FeatureFlagUpdateManyWithoutProjectsInput;
  apiRequests?: ApiRequestUpdateManyWithoutProjectsInput;
};
