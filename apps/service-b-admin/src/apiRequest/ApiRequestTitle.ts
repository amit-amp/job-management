import { ApiRequest as TApiRequest } from "../api/apiRequest/ApiRequest";

export const APIREQUEST_TITLE_FIELD = "id";

export const ApiRequestTitle = (record: TApiRequest): string => {
  return record.id?.toString() || String(record.id);
};
