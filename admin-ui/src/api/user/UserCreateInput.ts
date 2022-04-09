import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { JobCreateNestedManyWithoutUsersInput } from "./JobCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  branch?: BranchWhereUniqueInput | null;
  firstName?: string | null;
  jobs?: JobCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
