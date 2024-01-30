import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CouponCodeService } from "./couponCode.service";
import { CouponCodeControllerBase } from "./base/couponCode.controller.base";

@swagger.ApiTags("couponCodes")
@common.Controller("couponCodes")
export class CouponCodeController extends CouponCodeControllerBase {
  constructor(protected readonly service: CouponCodeService) {
    super(service);
  }
}
