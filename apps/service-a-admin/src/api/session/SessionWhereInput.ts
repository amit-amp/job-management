import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SessionWhereInput = {
  id?: StringFilter;
  sessionToken?: StringNullableFilter;
  expires?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
