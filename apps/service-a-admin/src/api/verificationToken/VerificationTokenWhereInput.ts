import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VerificationTokenWhereInput = {
  identifier?: StringNullableFilter;
  id?: StringFilter;
  expires?: DateTimeNullableFilter;
};
