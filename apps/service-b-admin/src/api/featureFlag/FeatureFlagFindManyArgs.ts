import { FeatureFlagWhereInput } from "./FeatureFlagWhereInput";
import { FeatureFlagOrderByInput } from "./FeatureFlagOrderByInput";

export type FeatureFlagFindManyArgs = {
  where?: FeatureFlagWhereInput;
  orderBy?: Array<FeatureFlagOrderByInput>;
  skip?: number;
  take?: number;
};
