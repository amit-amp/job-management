import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  orders?: OrderListRelationFilter;
  id?: StringFilter;
  createdAt?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  itemPrice?: FloatNullableFilter;
  description?: StringNullableFilter;
};
