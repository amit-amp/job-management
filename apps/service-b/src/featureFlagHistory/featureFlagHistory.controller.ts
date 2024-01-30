import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeatureFlagHistoryService } from "./featureFlagHistory.service";
import { FeatureFlagHistoryControllerBase } from "./base/featureFlagHistory.controller.base";

@swagger.ApiTags("featureFlagHistories")
@common.Controller("featureFlagHistories")
export class FeatureFlagHistoryController extends FeatureFlagHistoryControllerBase {
  constructor(protected readonly service: FeatureFlagHistoryService) {
    super(service);
  }
}
