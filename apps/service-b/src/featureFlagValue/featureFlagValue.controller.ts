import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeatureFlagValueService } from "./featureFlagValue.service";
import { FeatureFlagValueControllerBase } from "./base/featureFlagValue.controller.base";

@swagger.ApiTags("featureFlagValues")
@common.Controller("featureFlagValues")
export class FeatureFlagValueController extends FeatureFlagValueControllerBase {
  constructor(protected readonly service: FeatureFlagValueService) {
    super(service);
  }
}
