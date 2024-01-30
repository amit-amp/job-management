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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProjectUserListRelationFilter } from "../../projectUser/base/ProjectUserListRelationFilter";
import { ProjectInviteListRelationFilter } from "../../projectInvite/base/ProjectInviteListRelationFilter";
import { FeatureFlagHistoryListRelationFilter } from "../../featureFlagHistory/base/FeatureFlagHistoryListRelationFilter";
import { CouponCodeListRelationFilter } from "../../couponCode/base/CouponCodeListRelationFilter";
import { ApiKeyListRelationFilter } from "../../apiKey/base/ApiKeyListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  emailVerified?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  image?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  hasCompletedOnboarding?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  profession?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  technologies?: JsonFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  experienceLevelFlags?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  experienceLevelTests?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectUserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProjectUserListRelationFilter)
  @IsOptional()
  @Field(() => ProjectUserListRelationFilter, {
    nullable: true,
  })
  projects?: ProjectUserListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectInviteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProjectInviteListRelationFilter)
  @IsOptional()
  @Field(() => ProjectInviteListRelationFilter, {
    nullable: true,
  })
  invites?: ProjectInviteListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FeatureFlagHistoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FeatureFlagHistoryListRelationFilter)
  @IsOptional()
  @Field(() => FeatureFlagHistoryListRelationFilter, {
    nullable: true,
  })
  featureFlagHistory?: FeatureFlagHistoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CouponCodeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CouponCodeListRelationFilter)
  @IsOptional()
  @Field(() => CouponCodeListRelationFilter, {
    nullable: true,
  })
  couponCodes?: CouponCodeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ApiKeyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ApiKeyListRelationFilter)
  @IsOptional()
  @Field(() => ApiKeyListRelationFilter, {
    nullable: true,
  })
  apiKeys?: ApiKeyListRelationFilter;
}

export { UserWhereInput as UserWhereInput };