import { BranchListRelationFilter } from "../branch/BranchListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrganizationWhereInput = {
  branch?: BranchListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
