import { ProjectUserWhereInput } from "./ProjectUserWhereInput";
import { ProjectUserOrderByInput } from "./ProjectUserOrderByInput";

export type ProjectUserFindManyArgs = {
  where?: ProjectUserWhereInput;
  orderBy?: Array<ProjectUserOrderByInput>;
  skip?: number;
  take?: number;
};
