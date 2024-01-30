import { Project } from "../project/Project";

export type ApiRequest = {
  id: string;
  createdAt: Date;
  type?: "GET_CONFIG" | "GET_CONFIG_SCRIPT" | "TRACK_VIEW";
  durationInMs: number;
  apiVersion?: "V0" | "V1";
  project?: Project;
};
