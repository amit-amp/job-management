import * as graphql from "@nestjs/graphql";
import { FeatureFlagHistoryResolverBase } from "./base/featureFlagHistory.resolver.base";
import { FeatureFlagHistory } from "./base/FeatureFlagHistory";
import { FeatureFlagHistoryService } from "./featureFlagHistory.service";

@graphql.Resolver(() => FeatureFlagHistory)
export class FeatureFlagHistoryResolver extends FeatureFlagHistoryResolverBase {
  constructor(protected readonly service: FeatureFlagHistoryService) {
    super(service);
  }
}
