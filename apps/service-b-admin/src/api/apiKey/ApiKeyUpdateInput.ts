import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiKeyUpdateInput = {
  name?: string;
  hashedKey?: string;
  validUntil?: Date;
  revokedAt?: Date | null;
  user?: UserWhereUniqueInput;
};
