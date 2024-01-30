import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CouponCodeWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  code?: StringFilter;
  stripePriceId?: StringFilter;
  redeemedAt?: DateTimeNullableFilter;
  redeemedBy?: UserWhereUniqueInput;
};
