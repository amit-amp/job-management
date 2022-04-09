import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { UserCreateNestedManyWithoutBranchesInput } from "./UserCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  name?: string | null;
  organizations?: OrganizationWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutBranchesInput;
};
