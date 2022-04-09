import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type BranchWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  organizations?: OrganizationWhereUniqueInput;
  users?: UserListRelationFilter;
};
