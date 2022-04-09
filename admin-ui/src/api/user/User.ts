import { Branch } from "../branch/Branch";
import { Job } from "../job/Job";

export type User = {
  branch?: Branch | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  jobs?: Array<Job>;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
