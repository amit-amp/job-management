import { SortOrder } from "../../util/SortOrder";

export type FeatureFlagOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  description?: SortOrder;
  type?: SortOrder;
};
