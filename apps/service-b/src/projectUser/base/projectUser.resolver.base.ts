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
import { ProjectUser } from "./ProjectUser";
import { ProjectUserCountArgs } from "./ProjectUserCountArgs";
import { ProjectUserFindManyArgs } from "./ProjectUserFindManyArgs";
import { ProjectUserFindUniqueArgs } from "./ProjectUserFindUniqueArgs";
import { CreateProjectUserArgs } from "./CreateProjectUserArgs";
import { UpdateProjectUserArgs } from "./UpdateProjectUserArgs";
import { DeleteProjectUserArgs } from "./DeleteProjectUserArgs";
import { User } from "../../user/base/User";
import { Project } from "../../project/base/Project";
import { ProjectUserService } from "../projectUser.service";
@graphql.Resolver(() => ProjectUser)
export class ProjectUserResolverBase {
  constructor(protected readonly service: ProjectUserService) {}

  async _projectUsersMeta(
    @graphql.Args() args: ProjectUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProjectUser])
  async projectUsers(
    @graphql.Args() args: ProjectUserFindManyArgs
  ): Promise<ProjectUser[]> {
    return this.service.projectUsers(args);
  }

  @graphql.Query(() => ProjectUser, { nullable: true })
  async projectUser(
    @graphql.Args() args: ProjectUserFindUniqueArgs
  ): Promise<ProjectUser | null> {
    const result = await this.service.projectUser(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProjectUser)
  async createProjectUser(
    @graphql.Args() args: CreateProjectUserArgs
  ): Promise<ProjectUser> {
    return await this.service.createProjectUser({
      ...args,
      data: {
        ...args.data,

        user: {
          connect: args.data.user,
        },

        project: {
          connect: args.data.project,
        },
      },
    });
  }

  @graphql.Mutation(() => ProjectUser)
  async updateProjectUser(
    @graphql.Args() args: UpdateProjectUserArgs
  ): Promise<ProjectUser | null> {
    try {
      return await this.service.updateProjectUser({
        ...args,
        data: {
          ...args.data,

          user: {
            connect: args.data.user,
          },

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

  @graphql.Mutation(() => ProjectUser)
  async deleteProjectUser(
    @graphql.Args() args: DeleteProjectUserArgs
  ): Promise<ProjectUser | null> {
    try {
      return await this.service.deleteProjectUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: ProjectUser): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  async getProject(
    @graphql.Parent() parent: ProjectUser
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
