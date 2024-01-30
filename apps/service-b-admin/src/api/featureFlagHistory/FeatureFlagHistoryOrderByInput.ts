import { SortOrder } from "../../util/SortOrder";

export type FeatureFlagHistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  oldValue?: SortOrder;
  newValue?: SortOrder;
  userId?: SortOrder;
  flagValueId?: SortOrder;
};
