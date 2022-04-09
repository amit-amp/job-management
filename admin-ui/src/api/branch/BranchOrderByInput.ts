import { SortOrder } from "../../util/SortOrder";

export type BranchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  organizationsId?: SortOrder;
  updatedAt?: SortOrder;
};
