import { SortOrder } from "../../util/SortOrder";

export type ApiKeyOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  hashedKey?: SortOrder;
  validUntil?: SortOrder;
  revokedAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
