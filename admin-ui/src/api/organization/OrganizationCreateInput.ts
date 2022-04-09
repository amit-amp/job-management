import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";

export type OrganizationCreateInput = {
  branch?: BranchWhereUniqueInput | null;
  name?: string | null;
};
