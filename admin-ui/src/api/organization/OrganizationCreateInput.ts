import { BranchCreateNestedManyWithoutOrganizationsInput } from "./BranchCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  branch?: BranchCreateNestedManyWithoutOrganizationsInput;
  name?: string | null;
};
