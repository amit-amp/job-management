import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CouponCodeServiceBase } from "./base/couponCode.service.base";

@Injectable()
export class CouponCodeService extends CouponCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
