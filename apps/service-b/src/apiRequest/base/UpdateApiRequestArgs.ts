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
import { ApiRequestWhereUniqueInput } from "./ApiRequestWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApiRequestUpdateInput } from "./ApiRequestUpdateInput";

@ArgsType()
class UpdateApiRequestArgs {
  @ApiProperty({
    required: true,
    type: () => ApiRequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApiRequestWhereUniqueInput)
  @Field(() => ApiRequestWhereUniqueInput, { nullable: false })
  where!: ApiRequestWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ApiRequestUpdateInput,
  })
  @ValidateNested()
  @Type(() => ApiRequestUpdateInput)
  @Field(() => ApiRequestUpdateInput, { nullable: false })
  data!: ApiRequestUpdateInput;
}

export { UpdateApiRequestArgs as UpdateApiRequestArgs };
