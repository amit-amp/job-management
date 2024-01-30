import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiKeyCreateInput = {
  name: string;
  hashedKey: string;
  validUntil: Date;
  revokedAt?: Date | null;
  user: UserWhereUniqueInput;
};
