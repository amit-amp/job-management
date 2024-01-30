import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";

export type TestWhereInput = {
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  options?: OptionListRelationFilter;
  events?: EventListRelationFilter;
};
