import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CouponCodeUpdateInput = {
  code?: string;
  stripePriceId?: string;
  redeemedAt?: Date | null;
  redeemedBy?: UserWhereUniqueInput | null;
};
