import { Product } from "../product/Product";

export type Order = {
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  quantity: number | null;
  discount: number | null;
  totalPrice: number | null;
  customerId: string | null;
  product?: Product | null;
};
