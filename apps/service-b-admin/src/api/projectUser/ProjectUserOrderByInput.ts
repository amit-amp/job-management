import { SortOrder } from "../../util/SortOrder";

export type ProjectUserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  projectId?: SortOrder;
  role?: SortOrder;
};
