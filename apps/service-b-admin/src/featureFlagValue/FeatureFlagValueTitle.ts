import { FeatureFlagValue as TFeatureFlagValue } from "../api/featureFlagValue/FeatureFlagValue";

export const FEATUREFLAGVALUE_TITLE_FIELD = "value";

export const FeatureFlagValueTitle = (record: TFeatureFlagValue): string => {
  return record.value?.toString() || String(record.id);
};
