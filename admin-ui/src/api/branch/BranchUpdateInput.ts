import { OrganizationUpdateManyWithoutBranchesInput } from "./OrganizationUpdateManyWithoutBranchesInput";
import { UserUpdateManyWithoutBranchesInput } from "./UserUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  name?: string | null;
  organizations?: OrganizationUpdateManyWithoutBranchesInput;
  users?: UserUpdateManyWithoutBranchesInput;
};
