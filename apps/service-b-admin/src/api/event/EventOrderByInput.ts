import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  testId?: SortOrder;
  typeField?: SortOrder;
  selectedVariant?: SortOrder;
  createdAt?: SortOrder;
};
