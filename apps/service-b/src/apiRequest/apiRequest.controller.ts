import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApiRequestService } from "./apiRequest.service";
import { ApiRequestControllerBase } from "./base/apiRequest.controller.base";

@swagger.ApiTags("apiRequests")
@common.Controller("apiRequests")
export class ApiRequestController extends ApiRequestControllerBase {
  constructor(protected readonly service: ApiRequestService) {
    super(service);
  }
}
