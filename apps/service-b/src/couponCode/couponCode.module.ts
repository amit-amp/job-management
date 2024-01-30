import { Module } from "@nestjs/common";
import { CouponCodeModuleBase } from "./base/couponCode.module.base";
import { CouponCodeService } from "./couponCode.service";
import { CouponCodeController } from "./couponCode.controller";
import { CouponCodeResolver } from "./couponCode.resolver";

@Module({
  imports: [CouponCodeModuleBase],
  controllers: [CouponCodeController],
  providers: [CouponCodeService, CouponCodeResolver],
  exports: [CouponCodeService],
})
export class CouponCodeModule {}
