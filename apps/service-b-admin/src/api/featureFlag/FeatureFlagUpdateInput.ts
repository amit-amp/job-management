import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { FeatureFlagValueUpdateManyWithoutFeatureFlagsInput } from "./FeatureFlagValueUpdateManyWithoutFeatureFlagsInput";

export type FeatureFlagUpdateInput = {
  name?: string;
  project?: ProjectWhereUniqueInput;
  description?: string | null;
  type?: "BOOLEAN" | "STRING" | "NUMBER" | "JSON";
  values?: FeatureFlagValueUpdateManyWithoutFeatureFlagsInput;
};
