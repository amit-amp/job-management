import { Organization } from "../organization/Organization";
import { User } from "../user/User";

export type Branch = {
  createdAt: Date;
  id: string;
  name: string | null;
  organizations?: Array<Organization>;
  updatedAt: Date;
  users?: Array<User>;
};
