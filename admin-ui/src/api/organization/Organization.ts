import { Branch } from "../branch/Branch";

export type Organization = {
  branch?: Array<Branch>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
