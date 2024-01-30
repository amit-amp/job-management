import { User } from "../user/User";
import { Project } from "../project/Project";

export type ProjectUser = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  project?: Project;
  role?: "ADMIN" | "USER";
};
