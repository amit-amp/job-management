import { Option as TOption } from "../api/option/Option";

export const OPTION_TITLE_FIELD = "identifier";

export const OptionTitle = (record: TOption): string => {
  return record.identifier?.toString() || String(record.id);
};
