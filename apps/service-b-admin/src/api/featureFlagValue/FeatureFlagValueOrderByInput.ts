import { SortOrder } from "../../util/SortOrder";

export type FeatureFlagValueOrderByInput = {
  id?: SortOrder;
  flagId?: SortOrder;
  value?: SortOrder;
  environmentId?: SortOrder;
};
