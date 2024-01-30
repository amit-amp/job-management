import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeatureFlagService } from "./featureFlag.service";
import { FeatureFlagControllerBase } from "./base/featureFlag.controller.base";

@swagger.ApiTags("featureFlags")
@common.Controller("featureFlags")
export class FeatureFlagController extends FeatureFlagControllerBase {
  constructor(protected readonly service: FeatureFlagService) {
    super(service);
  }
}
