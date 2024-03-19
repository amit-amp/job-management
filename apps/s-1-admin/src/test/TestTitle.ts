import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "whatever";

export const TestTitle = (record: TTest): string => {
  return record.whatever?.toString() || String(record.id);
};
