import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { JobUpdateManyWithoutUsersInput } from "./JobUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  branch?: BranchWhereUniqueInput | null;
  firstName?: string | null;
  jobs?: JobUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
