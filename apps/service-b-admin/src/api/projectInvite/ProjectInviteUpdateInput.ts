import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectInviteUpdateInput = {
  email?: string;
  project?: ProjectWhereUniqueInput;
  user?: UserWhereUniqueInput | null;
  usedAt?: Date | null;
};
