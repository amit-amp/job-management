import { Project } from "../project/Project";
import { FeatureFlagValue } from "../featureFlagValue/FeatureFlagValue";

export type FeatureFlag = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  project?: Project;
  description: string | null;
  type?: "BOOLEAN" | "STRING" | "NUMBER" | "JSON";
  values?: Array<FeatureFlagValue>;
};
