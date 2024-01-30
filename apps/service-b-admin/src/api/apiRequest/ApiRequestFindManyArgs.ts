import { ApiRequestWhereInput } from "./ApiRequestWhereInput";
import { ApiRequestOrderByInput } from "./ApiRequestOrderByInput";

export type ApiRequestFindManyArgs = {
  where?: ApiRequestWhereInput;
  orderBy?: Array<ApiRequestOrderByInput>;
  skip?: number;
  take?: number;
};
