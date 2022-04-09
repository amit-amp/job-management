import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type UserWhereInput = {
  branch?: BranchWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
