import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { OptionUpdateManyWithoutTestsInput } from "./OptionUpdateManyWithoutTestsInput";
import { EventUpdateManyWithoutTestsInput } from "./EventUpdateManyWithoutTestsInput";

export type TestUpdateInput = {
  project?: ProjectWhereUniqueInput;
  name?: string;
  options?: OptionUpdateManyWithoutTestsInput;
  events?: EventUpdateManyWithoutTestsInput;
};
