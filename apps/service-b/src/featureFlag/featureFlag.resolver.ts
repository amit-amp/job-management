import * as graphql from "@nestjs/graphql";
import { FeatureFlagResolverBase } from "./base/featureFlag.resolver.base";
import { FeatureFlag } from "./base/FeatureFlag";
import { FeatureFlagService } from "./featureFlag.service";

@graphql.Resolver(() => FeatureFlag)
export class FeatureFlagResolver extends FeatureFlagResolverBase {
  constructor(protected readonly service: FeatureFlagService) {
    super(service);
  }
}
