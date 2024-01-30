/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CouponCode, User } from "@prisma/client";

export class CouponCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CouponCodeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponCodeCountArgs>
  ): Promise<number> {
    return this.prisma.couponCode.count(args);
  }

  async couponCodes<T extends Prisma.CouponCodeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponCodeFindManyArgs>
  ): Promise<CouponCode[]> {
    return this.prisma.couponCode.findMany(args);
  }
  async couponCode<T extends Prisma.CouponCodeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponCodeFindUniqueArgs>
  ): Promise<CouponCode | null> {
    return this.prisma.couponCode.findUnique(args);
  }
  async createCouponCode<T extends Prisma.CouponCodeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponCodeCreateArgs>
  ): Promise<CouponCode> {
    return this.prisma.couponCode.create<T>(args);
  }
  async updateCouponCode<T extends Prisma.CouponCodeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponCodeUpdateArgs>
  ): Promise<CouponCode> {
    return this.prisma.couponCode.update<T>(args);
  }
  async deleteCouponCode<T extends Prisma.CouponCodeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponCodeDeleteArgs>
  ): Promise<CouponCode> {
    return this.prisma.couponCode.delete(args);
  }

  async getRedeemedBy(parentId: string): Promise<User | null> {
    return this.prisma.couponCode
      .findUnique({
        where: { id: parentId },
      })
      .redeemedBy();
  }
}
