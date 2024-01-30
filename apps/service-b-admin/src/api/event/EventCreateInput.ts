import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type EventCreateInput = {
  test: TestWhereUniqueInput;
  typeField: number;
  selectedVariant: string;
};
