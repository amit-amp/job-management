import { User } from "../user/User";
import { FeatureFlagValue } from "../featureFlagValue/FeatureFlagValue";

export type FeatureFlagHistory = {
  id: string;
  createdAt: Date;
  oldValue: string | null;
  newValue: string | null;
  user?: User;
  flagValue?: FeatureFlagValue;
};
