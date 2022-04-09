import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";

export type OrganizationCreateInput = {
  branch?: BranchWhereUniqueInput;
  name?: string | null;
};
