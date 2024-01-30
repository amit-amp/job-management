import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiKeyWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  hashedKey?: StringFilter;
  validUntil?: DateTimeFilter;
  revokedAt?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
