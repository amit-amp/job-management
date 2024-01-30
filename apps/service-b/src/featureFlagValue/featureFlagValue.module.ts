import { Module } from "@nestjs/common";
import { FeatureFlagValueModuleBase } from "./base/featureFlagValue.module.base";
import { FeatureFlagValueService } from "./featureFlagValue.service";
import { FeatureFlagValueController } from "./featureFlagValue.controller";
import { FeatureFlagValueResolver } from "./featureFlagValue.resolver";

@Module({
  imports: [FeatureFlagValueModuleBase],
  controllers: [FeatureFlagValueController],
  providers: [FeatureFlagValueService, FeatureFlagValueResolver],
  exports: [FeatureFlagValueService],
})
export class FeatureFlagValueModule {}
