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
import { ProjectUserCreateNestedManyWithoutProjectsInput } from "./ProjectUserCreateNestedManyWithoutProjectsInput";
import { ProjectInviteCreateNestedManyWithoutProjectsInput } from "./ProjectInviteCreateNestedManyWithoutProjectsInput";
import { TestCreateNestedManyWithoutProjectsInput } from "./TestCreateNestedManyWithoutProjectsInput";
import { FeatureFlagCreateNestedManyWithoutProjectsInput } from "./FeatureFlagCreateNestedManyWithoutProjectsInput";
import { ApiRequestCreateNestedManyWithoutProjectsInput } from "./ApiRequestCreateNestedManyWithoutProjectsInput";

@InputType()
class ProjectCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  currentPeriodEnd!: Date;

  @ApiProperty({
    required: false,
    type: () => ProjectUserCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProjectUserCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProjectUserCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  users?: ProjectUserCreateNestedManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => ProjectInviteCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProjectInviteCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProjectInviteCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  invites?: ProjectInviteCreateNestedManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => TestCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => TestCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => TestCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  tests?: TestCreateNestedManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => FeatureFlagCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => FeatureFlagCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => FeatureFlagCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  featureFlags?: FeatureFlagCreateNestedManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => ApiRequestCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ApiRequestCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ApiRequestCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  apiRequests?: ApiRequestCreateNestedManyWithoutProjectsInput;
}

export { ProjectCreateInput as ProjectCreateInput };
