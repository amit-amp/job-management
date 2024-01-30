import { FeatureFlagWhereUniqueInput } from "../featureFlag/FeatureFlagWhereUniqueInput";
import { FeatureFlagHistoryCreateNestedManyWithoutFeatureFlagValuesInput } from "./FeatureFlagHistoryCreateNestedManyWithoutFeatureFlagValuesInput";

export type FeatureFlagValueCreateInput = {
  flag: FeatureFlagWhereUniqueInput;
  value: string;
  history?: FeatureFlagHistoryCreateNestedManyWithoutFeatureFlagValuesInput;
  environmentId?: string | null;
};
