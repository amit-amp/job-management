import { UserUpdateManyWithoutBranchesInput } from "./UserUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutBranchesInput;
};
