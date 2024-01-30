import { User } from "../user/User";

export type CouponCode = {
  id: string;
  createdAt: Date;
  code: string;
  stripePriceId: string;
  redeemedAt: Date | null;
  redeemedBy?: User | null;
};
