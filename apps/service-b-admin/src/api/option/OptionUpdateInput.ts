import { Decimal } from "decimal.js";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type OptionUpdateInput = {
  identifier?: string;
  chance?: Decimal;
  test?: TestWhereUniqueInput;
};
