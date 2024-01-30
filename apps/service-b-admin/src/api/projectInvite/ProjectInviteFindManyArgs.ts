import { ProjectInviteWhereInput } from "./ProjectInviteWhereInput";
import { ProjectInviteOrderByInput } from "./ProjectInviteOrderByInput";

export type ProjectInviteFindManyArgs = {
  where?: ProjectInviteWhereInput;
  orderBy?: Array<ProjectInviteOrderByInput>;
  skip?: number;
  take?: number;
};
