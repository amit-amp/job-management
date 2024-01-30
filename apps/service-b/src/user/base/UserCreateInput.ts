/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsDate,
  IsBoolean,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ProjectUserCreateNestedManyWithoutUsersInput } from "./ProjectUserCreateNestedManyWithoutUsersInput";
import { ProjectInviteCreateNestedManyWithoutUsersInput } from "./ProjectInviteCreateNestedManyWithoutUsersInput";
import { FeatureFlagHistoryCreateNestedManyWithoutUsersInput } from "./FeatureFlagHistoryCreateNestedManyWithoutUsersInput";
import { CouponCodeCreateNestedManyWithoutUsersInput } from "./CouponCodeCreateNestedManyWithoutUsersInput";
import { ApiKeyCreateNestedManyWithoutUsersInput } from "./ApiKeyCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  emailVerified?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  hasCompletedOnboarding!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  profession?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  technologies?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  experienceLevelFlags?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  experienceLevelTests?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProjectUserCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectUserCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectUserCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  projects?: ProjectUserCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ProjectInviteCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectInviteCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectInviteCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  invites?: ProjectInviteCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => FeatureFlagHistoryCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FeatureFlagHistoryCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FeatureFlagHistoryCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  featureFlagHistory?: FeatureFlagHistoryCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CouponCodeCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CouponCodeCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CouponCodeCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  couponCodes?: CouponCodeCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ApiKeyCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ApiKeyCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ApiKeyCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  apiKeys?: ApiKeyCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
