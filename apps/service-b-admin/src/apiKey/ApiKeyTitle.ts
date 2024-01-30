import { ApiKey as TApiKey } from "../api/apiKey/ApiKey";

export const APIKEY_TITLE_FIELD = "name";

export const ApiKeyTitle = (record: TApiKey): string => {
  return record.name?.toString() || String(record.id);
};
