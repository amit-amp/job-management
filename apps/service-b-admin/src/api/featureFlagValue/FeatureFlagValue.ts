import { FeatureFlag } from "../featureFlag/FeatureFlag";
import { FeatureFlagHistory } from "../featureFlagHistory/FeatureFlagHistory";

export type FeatureFlagValue = {
  id: string;
  flag?: FeatureFlag;
  value: string;
  history?: Array<FeatureFlagHistory>;
  environmentId: string | null;
};
