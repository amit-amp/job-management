import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { OptionCreateNestedManyWithoutTestsInput } from "./OptionCreateNestedManyWithoutTestsInput";
import { EventCreateNestedManyWithoutTestsInput } from "./EventCreateNestedManyWithoutTestsInput";

export type TestCreateInput = {
  project: ProjectWhereUniqueInput;
  name: string;
  options?: OptionCreateNestedManyWithoutTestsInput;
  events?: EventCreateNestedManyWithoutTestsInput;
};
