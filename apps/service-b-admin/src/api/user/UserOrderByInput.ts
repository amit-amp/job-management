import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  emailVerified?: SortOrder;
  image?: SortOrder;
  hasCompletedOnboarding?: SortOrder;
  profession?: SortOrder;
  technologies?: SortOrder;
  experienceLevelFlags?: SortOrder;
  experienceLevelTests?: SortOrder;
};
