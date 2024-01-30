import { SortOrder } from "../../util/SortOrder";

export type ApiRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  type?: SortOrder;
  durationInMs?: SortOrder;
  apiVersion?: SortOrder;
  projectId?: SortOrder;
};
