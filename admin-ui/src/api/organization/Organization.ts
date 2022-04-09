import { Branch } from "../branch/Branch";

export type Organization = {
  branch?: Branch | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
