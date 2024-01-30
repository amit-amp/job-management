import { Module } from "@nestjs/common";
import { FeatureFlagModuleBase } from "./base/featureFlag.module.base";
import { FeatureFlagService } from "./featureFlag.service";
import { FeatureFlagController } from "./featureFlag.controller";
import { FeatureFlagResolver } from "./featureFlag.resolver";

@Module({
  imports: [FeatureFlagModuleBase],
  controllers: [FeatureFlagController],
  providers: [FeatureFlagService, FeatureFlagResolver],
  exports: [FeatureFlagService],
})
export class FeatureFlagModule {}
