import { Project } from "../project/Project";
import { Option } from "../option/Option";
import { Event } from "../event/Event";

export type Test = {
  id: string;
  project?: Project;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  options?: Array<Option>;
  events?: Array<Event>;
};
