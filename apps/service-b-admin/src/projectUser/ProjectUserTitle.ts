import { ProjectUser as TProjectUser } from "../api/projectUser/ProjectUser";

export const PROJECTUSER_TITLE_FIELD = "id";

export const ProjectUserTitle = (record: TProjectUser): string => {
  return record.id?.toString() || String(record.id);
};
