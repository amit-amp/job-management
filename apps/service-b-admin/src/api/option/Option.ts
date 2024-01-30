import { Decimal } from "decimal.js";
import { Test } from "../test/Test";

export type Option = {
  id: string;
  identifier: string;
  chance: Decimal;
  test?: Test;
};
