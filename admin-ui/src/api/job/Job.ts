import { User } from "../user/User";

export type Job = {
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Created" | "Accepted" | "InProgress" | "Completed" | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
