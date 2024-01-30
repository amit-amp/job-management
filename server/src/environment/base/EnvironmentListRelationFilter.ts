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
import { EnvironmentWhereInput } from "./EnvironmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EnvironmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EnvironmentWhereInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentWhereInput)
  @IsOptional()
  @Field(() => EnvironmentWhereInput, {
    nullable: true,
  })
  every?: EnvironmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnvironmentWhereInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentWhereInput)
  @IsOptional()
  @Field(() => EnvironmentWhereInput, {
    nullable: true,
  })
  some?: EnvironmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnvironmentWhereInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentWhereInput)
  @IsOptional()
  @Field(() => EnvironmentWhereInput, {
    nullable: true,
  })
  none?: EnvironmentWhereInput;
}
export { EnvironmentListRelationFilter as EnvironmentListRelationFilter };
