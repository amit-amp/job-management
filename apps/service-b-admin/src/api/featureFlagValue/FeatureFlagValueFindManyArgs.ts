import { FeatureFlagValueWhereInput } from "./FeatureFlagValueWhereInput";
import { FeatureFlagValueOrderByInput } from "./FeatureFlagValueOrderByInput";

export type FeatureFlagValueFindManyArgs = {
  where?: FeatureFlagValueWhereInput;
  orderBy?: Array<FeatureFlagValueOrderByInput>;
  skip?: number;
  take?: number;
};
