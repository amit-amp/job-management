import { ProjectUserCreateNestedManyWithoutProjectsInput } from "./ProjectUserCreateNestedManyWithoutProjectsInput";
import { ProjectInviteCreateNestedManyWithoutProjectsInput } from "./ProjectInviteCreateNestedManyWithoutProjectsInput";
import { TestCreateNestedManyWithoutProjectsInput } from "./TestCreateNestedManyWithoutProjectsInput";
import { FeatureFlagCreateNestedManyWithoutProjectsInput } from "./FeatureFlagCreateNestedManyWithoutProjectsInput";
import { ApiRequestCreateNestedManyWithoutProjectsInput } from "./ApiRequestCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  name: string;
  stripeCustomerId?: string | null;
  stripeSubscriptionId?: string | null;
  stripePriceId?: string | null;
  currentPeriodEnd: Date;
  users?: ProjectUserCreateNestedManyWithoutProjectsInput;
  invites?: ProjectInviteCreateNestedManyWithoutProjectsInput;
  tests?: TestCreateNestedManyWithoutProjectsInput;
  featureFlags?: FeatureFlagCreateNestedManyWithoutProjectsInput;
  apiRequests?: ApiRequestCreateNestedManyWithoutProjectsInput;
};
