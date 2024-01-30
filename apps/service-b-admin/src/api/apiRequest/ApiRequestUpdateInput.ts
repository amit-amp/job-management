import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ApiRequestUpdateInput = {
  type?: "GET_CONFIG" | "GET_CONFIG_SCRIPT" | "TRACK_VIEW";
  durationInMs?: number;
  apiVersion?: "V0" | "V1";
  project?: ProjectWhereUniqueInput;
};
