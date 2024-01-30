import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ExampleWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
