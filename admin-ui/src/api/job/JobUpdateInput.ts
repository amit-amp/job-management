import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobUpdateInput = {
  description?: string | null;
  status?: "Created" | "Accepted" | "InProgress" | "Completed" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
