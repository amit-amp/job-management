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
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProjectUserUpdateManyWithoutProjectsInput } from "./ProjectUserUpdateManyWithoutProjectsInput";
import { ProjectInviteUpdateManyWithoutProjectsInput } from "./ProjectInviteUpdateManyWithoutProjectsInput";
import { TestUpdateManyWithoutProjectsInput } from "./TestUpdateManyWithoutProjectsInput";
import { FeatureFlagUpdateManyWithoutProjectsInput } from "./FeatureFlagUpdateManyWithoutProjectsInput";
import { ApiRequestUpdateManyWithoutProjectsInput } from "./ApiRequestUpdateManyWithoutProjectsInput";

@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stripeCustomerId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stripeSubscriptionId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stripePriceId?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  currentPeriodEnd?: Date;

  @ApiProperty({
    required: false,
    type: () => ProjectUserUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProjectUserUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProjectUserUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  users?: ProjectUserUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => ProjectInviteUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProjectInviteUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProjectInviteUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  invites?: ProjectInviteUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => TestUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => TestUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => TestUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  tests?: TestUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => FeatureFlagUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => FeatureFlagUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => FeatureFlagUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  featureFlags?: FeatureFlagUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => ApiRequestUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ApiRequestUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ApiRequestUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  apiRequests?: ApiRequestUpdateManyWithoutProjectsInput;
}

export { ProjectUpdateInput as ProjectUpdateInput };
