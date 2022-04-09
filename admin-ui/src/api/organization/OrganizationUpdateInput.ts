import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";

export type OrganizationUpdateInput = {
  branch?: BranchWhereUniqueInput;
  name?: string | null;
};
