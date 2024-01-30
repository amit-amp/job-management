import { Test } from "../test/Test";

export type Event = {
  id: string;
  test?: Test;
  typeField: number;
  selectedVariant: string;
  createdAt: Date;
};
