import * as graphql from "@nestjs/graphql";
import { CouponCodeResolverBase } from "./base/couponCode.resolver.base";
import { CouponCode } from "./base/CouponCode";
import { CouponCodeService } from "./couponCode.service";

@graphql.Resolver(() => CouponCode)
export class CouponCodeResolver extends CouponCodeResolverBase {
  constructor(protected readonly service: CouponCodeService) {
    super(service);
  }
}
