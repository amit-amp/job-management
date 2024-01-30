import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  stripeCustomerId?: SortOrder;
  stripeSubscriptionId?: SortOrder;
  stripePriceId?: SortOrder;
  currentPeriodEnd?: SortOrder;
};
