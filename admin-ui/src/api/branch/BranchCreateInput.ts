import { OrganizationCreateNestedManyWithoutBranchesInput } from "./OrganizationCreateNestedManyWithoutBranchesInput";
import { UserCreateNestedManyWithoutBranchesInput } from "./UserCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  name?: string | null;
  organizations?: OrganizationCreateNestedManyWithoutBranchesInput;
  users?: UserCreateNestedManyWithoutBranchesInput;
};
