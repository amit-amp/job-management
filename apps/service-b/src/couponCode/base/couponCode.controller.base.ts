/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CouponCodeService } from "../couponCode.service";
import { CouponCodeCreateInput } from "./CouponCodeCreateInput";
import { CouponCode } from "./CouponCode";
import { CouponCodeFindManyArgs } from "./CouponCodeFindManyArgs";
import { CouponCodeWhereUniqueInput } from "./CouponCodeWhereUniqueInput";
import { CouponCodeUpdateInput } from "./CouponCodeUpdateInput";

export class CouponCodeControllerBase {
  constructor(protected readonly service: CouponCodeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CouponCode })
  async createCouponCode(
    @common.Body() data: CouponCodeCreateInput
  ): Promise<CouponCode> {
    return await this.service.createCouponCode({
      data: {
        ...data,

        redeemedBy: data.redeemedBy
          ? {
              connect: data.redeemedBy,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        code: true,
        stripePriceId: true,
        redeemedAt: true,

        redeemedBy: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CouponCode] })
  @ApiNestedQuery(CouponCodeFindManyArgs)
  async couponCodes(@common.Req() request: Request): Promise<CouponCode[]> {
    const args = plainToClass(CouponCodeFindManyArgs, request.query);
    return this.service.couponCodes({
      ...args,
      select: {
        id: true,
        createdAt: true,
        code: true,
        stripePriceId: true,
        redeemedAt: true,

        redeemedBy: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CouponCode })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async couponCode(
    @common.Param() params: CouponCodeWhereUniqueInput
  ): Promise<CouponCode | null> {
    const result = await this.service.couponCode({
      where: params,
      select: {
        id: true,
        createdAt: true,
        code: true,
        stripePriceId: true,
        redeemedAt: true,

        redeemedBy: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CouponCode })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCouponCode(
    @common.Param() params: CouponCodeWhereUniqueInput,
    @common.Body() data: CouponCodeUpdateInput
  ): Promise<CouponCode | null> {
    try {
      return await this.service.updateCouponCode({
        where: params,
        data: {
          ...data,

          redeemedBy: data.redeemedBy
            ? {
                connect: data.redeemedBy,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          code: true,
          stripePriceId: true,
          redeemedAt: true,

          redeemedBy: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CouponCode })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCouponCode(
    @common.Param() params: CouponCodeWhereUniqueInput
  ): Promise<CouponCode | null> {
    try {
      return await this.service.deleteCouponCode({
        where: params,
        select: {
          id: true,
          createdAt: true,
          code: true,
          stripePriceId: true,
          redeemedAt: true,

          redeemedBy: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}