import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type BranchWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  organizations?: OrganizationListRelationFilter;
  users?: UserListRelationFilter;
};
