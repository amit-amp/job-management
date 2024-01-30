import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CouponCodeCreateInput = {
  code: string;
  stripePriceId: string;
  redeemedAt?: Date | null;
  redeemedBy?: UserWhereUniqueInput | null;
};
