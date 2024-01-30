import { User } from "../user/User";

export type ApiKey = {
  id: string;
  name: string;
  hashedKey: string;
  validUntil: Date;
  revokedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
};
