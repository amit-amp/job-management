import { Order } from "../order/Order";

export type Product = {
  orders?: Array<Order>;
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  name: string | null;
  itemPrice: number | null;
  description: string | null;
};
