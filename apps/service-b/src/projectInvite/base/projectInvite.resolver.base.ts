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
import { ProjectInvite } from "./ProjectInvite";
import { ProjectInviteCountArgs } from "./ProjectInviteCountArgs";
import { ProjectInviteFindManyArgs } from "./ProjectInviteFindManyArgs";
import { ProjectInviteFindUniqueArgs } from "./ProjectInviteFindUniqueArgs";
import { CreateProjectInviteArgs } from "./CreateProjectInviteArgs";
import { UpdateProjectInviteArgs } from "./UpdateProjectInviteArgs";
import { DeleteProjectInviteArgs } from "./DeleteProjectInviteArgs";
import { Project } from "../../project/base/Project";
import { User } from "../../user/base/User";
import { ProjectInviteService } from "../projectInvite.service";
@graphql.Resolver(() => ProjectInvite)
export class ProjectInviteResolverBase {
  constructor(protected readonly service: ProjectInviteService) {}

  async _projectInvitesMeta(
    @graphql.Args() args: ProjectInviteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProjectInvite])
  async projectInvites(
    @graphql.Args() args: ProjectInviteFindManyArgs
  ): Promise<ProjectInvite[]> {
    return this.service.projectInvites(args);
  }

  @graphql.Query(() => ProjectInvite, { nullable: true })
  async projectInvite(
    @graphql.Args() args: ProjectInviteFindUniqueArgs
  ): Promise<ProjectInvite | null> {
    const result = await this.service.projectInvite(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProjectInvite)
  async createProjectInvite(
    @graphql.Args() args: CreateProjectInviteArgs
  ): Promise<ProjectInvite> {
    return await this.service.createProjectInvite({
      ...args,
      data: {
        ...args.data,

        project: {
          connect: args.data.project,
        },

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ProjectInvite)
  async updateProjectInvite(
    @graphql.Args() args: UpdateProjectInviteArgs
  ): Promise<ProjectInvite | null> {
    try {
      return await this.service.updateProjectInvite({
        ...args,
        data: {
          ...args.data,

          project: {
            connect: args.data.project,
          },

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
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

  @graphql.Mutation(() => ProjectInvite)
  async deleteProjectInvite(
    @graphql.Args() args: DeleteProjectInviteArgs
  ): Promise<ProjectInvite | null> {
    try {
      return await this.service.deleteProjectInvite(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  async getProject(
    @graphql.Parent() parent: ProjectInvite
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: ProjectInvite): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}