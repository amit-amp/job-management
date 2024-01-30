import * as graphql from "@nestjs/graphql";
import { FeatureFlagValueResolverBase } from "./base/featureFlagValue.resolver.base";
import { FeatureFlagValue } from "./base/FeatureFlagValue";
import { FeatureFlagValueService } from "./featureFlagValue.service";

@graphql.Resolver(() => FeatureFlagValue)
export class FeatureFlagValueResolver extends FeatureFlagValueResolverBase {
  constructor(protected readonly service: FeatureFlagValueService) {
    super(service);
  }
}
