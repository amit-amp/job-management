import { FeatureFlagWhereUniqueInput } from "../featureFlag/FeatureFlagWhereUniqueInput";
import { FeatureFlagHistoryUpdateManyWithoutFeatureFlagValuesInput } from "./FeatureFlagHistoryUpdateManyWithoutFeatureFlagValuesInput";

export type FeatureFlagValueUpdateInput = {
  flag?: FeatureFlagWhereUniqueInput;
  value?: string;
  history?: FeatureFlagHistoryUpdateManyWithoutFeatureFlagValuesInput;
  environmentId?: string | null;
};
