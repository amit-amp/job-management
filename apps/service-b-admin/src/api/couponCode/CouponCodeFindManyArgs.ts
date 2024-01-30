import { CouponCodeWhereInput } from "./CouponCodeWhereInput";
import { CouponCodeOrderByInput } from "./CouponCodeOrderByInput";

export type CouponCodeFindManyArgs = {
  where?: CouponCodeWhereInput;
  orderBy?: Array<CouponCodeOrderByInput>;
  skip?: number;
  take?: number;
};
