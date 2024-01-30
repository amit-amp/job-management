import { ExampleWhereInput } from "./ExampleWhereInput";
import { ExampleOrderByInput } from "./ExampleOrderByInput";

export type ExampleFindManyArgs = {
  where?: ExampleWhereInput;
  orderBy?: Array<ExampleOrderByInput>;
  skip?: number;
  take?: number;
};
