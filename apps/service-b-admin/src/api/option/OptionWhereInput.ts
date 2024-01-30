import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type OptionWhereInput = {
  id?: StringFilter;
  identifier?: StringFilter;
  chance?: DecimalFilter;
  test?: TestWhereUniqueInput;
};
