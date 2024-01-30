import { ProjectUser } from "../projectUser/ProjectUser";
import { ProjectInvite } from "../projectInvite/ProjectInvite";
import { Test } from "../test/Test";
import { FeatureFlag } from "../featureFlag/FeatureFlag";
import { ApiRequest } from "../apiRequest/ApiRequest";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  stripePriceId: string | null;
  currentPeriodEnd: Date;
  users?: Array<ProjectUser>;
  invites?: Array<ProjectInvite>;
  tests?: Array<Test>;
  featureFlags?: Array<FeatureFlag>;
  apiRequests?: Array<ApiRequest>;
};
