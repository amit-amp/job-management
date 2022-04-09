import { UserCreateNestedManyWithoutBranchesInput } from "./UserCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutBranchesInput;
};
