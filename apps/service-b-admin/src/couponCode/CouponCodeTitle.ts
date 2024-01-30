import { CouponCode as TCouponCode } from "../api/couponCode/CouponCode";

export const COUPONCODE_TITLE_FIELD = "code";

export const CouponCodeTitle = (record: TCouponCode): string => {
  return record.code?.toString() || String(record.id);
};
