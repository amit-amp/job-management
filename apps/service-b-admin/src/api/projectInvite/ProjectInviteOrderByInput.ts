import { SortOrder } from "../../util/SortOrder";

export type ProjectInviteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  projectId?: SortOrder;
  userId?: SortOrder;
  usedAt?: SortOrder;
};
