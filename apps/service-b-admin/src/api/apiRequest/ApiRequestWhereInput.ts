import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ApiRequestWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  type?: "GET_CONFIG" | "GET_CONFIG_SCRIPT" | "TRACK_VIEW";
  durationInMs?: IntFilter;
  apiVersion?: "V0" | "V1";
  project?: ProjectWhereUniqueInput;
};
