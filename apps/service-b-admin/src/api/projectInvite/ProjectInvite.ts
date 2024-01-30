import { Project } from "../project/Project";
import { User } from "../user/User";

export type ProjectInvite = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  project?: Project;
  user?: User | null;
  usedAt: Date | null;
};
