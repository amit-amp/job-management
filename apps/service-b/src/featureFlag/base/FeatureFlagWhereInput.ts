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
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumFeatureFlagType } from "./EnumFeatureFlagType";
import { FeatureFlagValueListRelationFilter } from "../../featureFlagValue/base/FeatureFlagValueListRelationFilter";

@InputType()
class FeatureFlagWhereInput {
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
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumFeatureFlagType,
  })
  @IsEnum(EnumFeatureFlagType)
  @IsOptional()
  @Field(() => EnumFeatureFlagType, {
    nullable: true,
  })
  type?: "BOOLEAN" | "STRING" | "NUMBER" | "JSON";

  @ApiProperty({
    required: false,
    type: () => FeatureFlagValueListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FeatureFlagValueListRelationFilter)
  @IsOptional()
  @Field(() => FeatureFlagValueListRelationFilter, {
    nullable: true,
  })
  values?: FeatureFlagValueListRelationFilter;
}

export { FeatureFlagWhereInput as FeatureFlagWhereInput };
