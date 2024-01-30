import * as graphql from "@nestjs/graphql";
import { ApiRequestResolverBase } from "./base/apiRequest.resolver.base";
import { ApiRequest } from "./base/ApiRequest";
import { ApiRequestService } from "./apiRequest.service";

@graphql.Resolver(() => ApiRequest)
export class ApiRequestResolver extends ApiRequestResolverBase {
  constructor(protected readonly service: ApiRequestService) {
    super(service);
  }
}
