import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectUserUpdateInput = {
  user?: UserWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
  role?: "ADMIN" | "USER";
};
