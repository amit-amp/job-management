/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProjectUserWhereUniqueInput } from "../../projectUser/base/ProjectUserWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProjectUserUpdateManyWithoutProjectsInput {
  @Field(() => [ProjectUserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectUserWhereUniqueInput],
  })
  connect?: Array<ProjectUserWhereUniqueInput>;

  @Field(() => [ProjectUserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectUserWhereUniqueInput],
  })
  disconnect?: Array<ProjectUserWhereUniqueInput>;

  @Field(() => [ProjectUserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectUserWhereUniqueInput],
  })
  set?: Array<ProjectUserWhereUniqueInput>;
}

export { ProjectUserUpdateManyWithoutProjectsInput as ProjectUserUpdateManyWithoutProjectsInput };
