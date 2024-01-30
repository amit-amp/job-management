import { ProjectInvite as TProjectInvite } from "../api/projectInvite/ProjectInvite";

export const PROJECTINVITE_TITLE_FIELD = "email";

export const ProjectInviteTitle = (record: TProjectInvite): string => {
  return record.email?.toString() || String(record.id);
};
