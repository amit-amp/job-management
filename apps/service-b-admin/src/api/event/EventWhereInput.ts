import { StringFilter } from "../../util/StringFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type EventWhereInput = {
  id?: StringFilter;
  test?: TestWhereUniqueInput;
  typeField?: IntFilter;
  selectedVariant?: StringFilter;
  createdAt?: DateTimeFilter;
};
