/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CouponCodeWhereInput } from "./CouponCodeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CouponCodeOrderByInput } from "./CouponCodeOrderByInput";

@ArgsType()
class CouponCodeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CouponCodeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CouponCodeWhereInput, { nullable: true })
  @Type(() => CouponCodeWhereInput)
  where?: CouponCodeWhereInput;

  @ApiProperty({
    required: false,
    type: [CouponCodeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CouponCodeOrderByInput], { nullable: true })
  @Type(() => CouponCodeOrderByInput)
  orderBy?: Array<CouponCodeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CouponCodeFindManyArgs as CouponCodeFindManyArgs };