import { FeatureFlagHistoryWhereInput } from "./FeatureFlagHistoryWhereInput";
import { FeatureFlagHistoryOrderByInput } from "./FeatureFlagHistoryOrderByInput";

export type FeatureFlagHistoryFindManyArgs = {
  where?: FeatureFlagHistoryWhereInput;
  orderBy?: Array<FeatureFlagHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
