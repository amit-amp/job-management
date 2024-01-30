/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Test } from "./Test";
import { TestCountArgs } from "./TestCountArgs";
import { TestFindManyArgs } from "./TestFindManyArgs";
import { TestFindUniqueArgs } from "./TestFindUniqueArgs";
import { CreateTestArgs } from "./CreateTestArgs";
import { UpdateTestArgs } from "./UpdateTestArgs";
import { DeleteTestArgs } from "./DeleteTestArgs";
import { OptionFindManyArgs } from "../../option/base/OptionFindManyArgs";
import { Option } from "../../option/base/Option";
import { EventFindManyArgs } from "../../event/base/EventFindManyArgs";
import { Event } from "../../event/base/Event";
import { Project } from "../../project/base/Project";
import { TestService } from "../test.service";
@graphql.Resolver(() => Test)
export class TestResolverBase {
  constructor(protected readonly service: TestService) {}

  async _testsMeta(
    @graphql.Args() args: TestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Test])
  async tests(@graphql.Args() args: TestFindManyArgs): Promise<Test[]> {
    return this.service.tests(args);
  }

  @graphql.Query(() => Test, { nullable: true })
  async test(@graphql.Args() args: TestFindUniqueArgs): Promise<Test | null> {
    const result = await this.service.test(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Test)
  async createTest(@graphql.Args() args: CreateTestArgs): Promise<Test> {
    return await this.service.createTest({
      ...args,
      data: {
        ...args.data,

        project: {
          connect: args.data.project,
        },
      },
    });
  }

  @graphql.Mutation(() => Test)
  async updateTest(@graphql.Args() args: UpdateTestArgs): Promise<Test | null> {
    try {
      return await this.service.updateTest({
        ...args,
        data: {
          ...args.data,

          project: {
            connect: args.data.project,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Test)
  async deleteTest(@graphql.Args() args: DeleteTestArgs): Promise<Test | null> {
    try {
      return await this.service.deleteTest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Option], { name: "options" })
  async findOptions(
    @graphql.Parent() parent: Test,
    @graphql.Args() args: OptionFindManyArgs
  ): Promise<Option[]> {
    const results = await this.service.findOptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Event], { name: "events" })
  async findEvents(
    @graphql.Parent() parent: Test,
    @graphql.Args() args: EventFindManyArgs
  ): Promise<Event[]> {
    const results = await this.service.findEvents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  async getProject(@graphql.Parent() parent: Test): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
