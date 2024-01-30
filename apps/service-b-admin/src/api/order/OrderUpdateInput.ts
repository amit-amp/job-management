import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  quantity?: number | null;
  discount?: number | null;
  totalPrice?: number | null;
  customerId?: string | null;
  product?: ProductWhereUniqueInput | null;
};
