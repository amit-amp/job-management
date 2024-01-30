import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FeatureFlagValueWhereUniqueInput } from "../featureFlagValue/FeatureFlagValueWhereUniqueInput";

export type FeatureFlagHistoryWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  oldValue?: StringNullableFilter;
  newValue?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  flagValue?: FeatureFlagValueWhereUniqueInput;
};
