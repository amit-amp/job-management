import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectUserCreateInput = {
  user: UserWhereUniqueInput;
  project: ProjectWhereUniqueInput;
  role: "ADMIN" | "USER";
};
