import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { UserUpdateManyWithoutBranchesInput } from "./UserUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  name?: string | null;
  organizations?: OrganizationWhereUniqueInput | null;
  users?: UserUpdateManyWithoutBranchesInput;
};
