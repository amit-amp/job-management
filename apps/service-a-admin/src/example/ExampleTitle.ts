import { Example as TExample } from "../api/example/Example";

export const EXAMPLE_TITLE_FIELD = "id";

export const ExampleTitle = (record: TExample): string => {
  return record.id?.toString() || String(record.id);
};
