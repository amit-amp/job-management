import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { FeatureFlagValueCreateNestedManyWithoutFeatureFlagsInput } from "./FeatureFlagValueCreateNestedManyWithoutFeatureFlagsInput";

export type FeatureFlagCreateInput = {
  name: string;
  project: ProjectWhereUniqueInput;
  description?: string | null;
  type: "BOOLEAN" | "STRING" | "NUMBER" | "JSON";
  values?: FeatureFlagValueCreateNestedManyWithoutFeatureFlagsInput;
};
