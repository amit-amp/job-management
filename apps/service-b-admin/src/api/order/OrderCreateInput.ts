import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  quantity?: number | null;
  discount?: number | null;
  totalPrice?: number | null;
  customerId?: string | null;
  product?: ProductWhereUniqueInput | null;
};
