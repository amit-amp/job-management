import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  discount?: FloatNullableFilter;
  totalPrice?: IntNullableFilter;
  customerId?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
};
