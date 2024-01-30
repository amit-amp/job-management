import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "customerId";

export const OrderTitle = (record: TOrder): string => {
  return record.customerId?.toString() || String(record.id);
};
