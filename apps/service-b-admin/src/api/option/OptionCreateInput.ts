import { Decimal } from "decimal.js";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type OptionCreateInput = {
  identifier: string;
  chance: Decimal;
  test: TestWhereUniqueInput;
};
