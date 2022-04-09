import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrganizationWhereInput = {
  branch?: BranchWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
