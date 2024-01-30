import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FeatureFlagValueWhereUniqueInput } from "../featureFlagValue/FeatureFlagValueWhereUniqueInput";

export type FeatureFlagHistoryCreateInput = {
  oldValue?: string | null;
  newValue?: string | null;
  user: UserWhereUniqueInput;
  flagValue: FeatureFlagValueWhereUniqueInput;
};
