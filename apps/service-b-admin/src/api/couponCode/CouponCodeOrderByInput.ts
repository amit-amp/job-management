import { SortOrder } from "../../util/SortOrder";

export type CouponCodeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  code?: SortOrder;
  stripePriceId?: SortOrder;
  redeemedAt?: SortOrder;
  redeemedById?: SortOrder;
};
