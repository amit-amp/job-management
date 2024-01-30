import { FeatureFlag as TFeatureFlag } from "../api/featureFlag/FeatureFlag";

export const FEATUREFLAG_TITLE_FIELD = "name";

export const FeatureFlagTitle = (record: TFeatureFlag): string => {
  return record.name?.toString() || String(record.id);
};
