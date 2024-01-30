import { StringFilter } from "../../util/StringFilter";
import { FeatureFlagWhereUniqueInput } from "../featureFlag/FeatureFlagWhereUniqueInput";
import { FeatureFlagHistoryListRelationFilter } from "../featureFlagHistory/FeatureFlagHistoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FeatureFlagValueWhereInput = {
  id?: StringFilter;
  flag?: FeatureFlagWhereUniqueInput;
  value?: StringFilter;
  history?: FeatureFlagHistoryListRelationFilter;
  environmentId?: StringNullableFilter;
};
