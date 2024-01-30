import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "selectedVariant";

export const EventTitle = (record: TEvent): string => {
  return record.selectedVariant?.toString() || String(record.id);
};
