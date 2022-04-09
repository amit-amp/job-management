import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";

export type OrganizationUpdateInput = {
  branch?: BranchWhereUniqueInput | null;
  name?: string | null;
};
