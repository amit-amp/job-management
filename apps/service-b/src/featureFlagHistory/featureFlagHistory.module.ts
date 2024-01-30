import { Module } from "@nestjs/common";
import { FeatureFlagHistoryModuleBase } from "./base/featureFlagHistory.module.base";
import { FeatureFlagHistoryService } from "./featureFlagHistory.service";
import { FeatureFlagHistoryController } from "./featureFlagHistory.controller";
import { FeatureFlagHistoryResolver } from "./featureFlagHistory.resolver";

@Module({
  imports: [FeatureFlagHistoryModuleBase],
  controllers: [FeatureFlagHistoryController],
  providers: [FeatureFlagHistoryService, FeatureFlagHistoryResolver],
  exports: [FeatureFlagHistoryService],
})
export class FeatureFlagHistoryModule {}
