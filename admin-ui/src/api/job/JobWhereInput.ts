import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Created" | "Accepted" | "InProgress" | "Completed";
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
