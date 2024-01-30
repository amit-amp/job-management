import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeatureFlagValueListRelationFilter } from "../featureFlagValue/FeatureFlagValueListRelationFilter";

export type FeatureFlagWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  project?: ProjectWhereUniqueInput;
  description?: StringNullableFilter;
  type?: "BOOLEAN" | "STRING" | "NUMBER" | "JSON";
  values?: FeatureFlagValueListRelationFilter;
};
