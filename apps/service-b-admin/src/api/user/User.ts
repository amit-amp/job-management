import { JsonValue } from "type-fest";
import { ProjectUser } from "../projectUser/ProjectUser";
import { ProjectInvite } from "../projectInvite/ProjectInvite";
import { FeatureFlagHistory } from "../featureFlagHistory/FeatureFlagHistory";
import { CouponCode } from "../couponCode/CouponCode";
import { ApiKey } from "../apiKey/ApiKey";

export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  hasCompletedOnboarding: boolean;
  profession: string | null;
  technologies: JsonValue;
  experienceLevelFlags: number | null;
  experienceLevelTests: number | null;
  projects?: Array<ProjectUser>;
  invites?: Array<ProjectInvite>;
  featureFlagHistory?: Array<FeatureFlagHistory>;
  couponCodes?: Array<CouponCode>;
  apiKeys?: Array<ApiKey>;
};
