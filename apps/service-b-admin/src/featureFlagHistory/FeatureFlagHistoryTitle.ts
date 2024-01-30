import { FeatureFlagHistory as TFeatureFlagHistory } from "../api/featureFlagHistory/FeatureFlagHistory";

export const FEATUREFLAGHISTORY_TITLE_FIELD = "oldValue";

export const FeatureFlagHistoryTitle = (
  record: TFeatureFlagHistory
): string => {
  return record.oldValue?.toString() || String(record.id);
};
