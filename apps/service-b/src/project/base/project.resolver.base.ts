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
import { Project } from "./Project";
import { ProjectCountArgs } from "./ProjectCountArgs";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectFindUniqueArgs } from "./ProjectFindUniqueArgs";
import { CreateProjectArgs } from "./CreateProjectArgs";
import { UpdateProjectArgs } from "./UpdateProjectArgs";
import { DeleteProjectArgs } from "./DeleteProjectArgs";
import { ProjectUserFindManyArgs } from "../../projectUser/base/ProjectUserFindManyArgs";
import { ProjectUser } from "../../projectUser/base/ProjectUser";
import { ProjectInviteFindManyArgs } from "../../projectInvite/base/ProjectInviteFindManyArgs";
import { ProjectInvite } from "../../projectInvite/base/ProjectInvite";
import { TestFindManyArgs } from "../../test/base/TestFindManyArgs";
import { Test } from "../../test/base/Test";
import { FeatureFlagFindManyArgs } from "../../featureFlag/base/FeatureFlagFindManyArgs";
import { FeatureFlag } from "../../featureFlag/base/FeatureFlag";
import { ApiRequestFindManyArgs } from "../../apiRequest/base/ApiRequestFindManyArgs";
import { ApiRequest } from "../../apiRequest/base/ApiRequest";
import { ProjectService } from "../project.service";
@graphql.Resolver(() => Project)
export class ProjectResolverBase {
  constructor(protected readonly service: ProjectService) {}

  async _projectsMeta(
    @graphql.Args() args: ProjectCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Project])
  async projects(
    @graphql.Args() args: ProjectFindManyArgs
  ): Promise<Project[]> {
    return this.service.projects(args);
  }

  @graphql.Query(() => Project, { nullable: true })
  async project(
    @graphql.Args() args: ProjectFindUniqueArgs
  ): Promise<Project | null> {
    const result = await this.service.project(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Project)
  async createProject(
    @graphql.Args() args: CreateProjectArgs
  ): Promise<Project> {
    return await this.service.createProject({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Project)
  async updateProject(
    @graphql.Args() args: UpdateProjectArgs
  ): Promise<Project | null> {
    try {
      return await this.service.updateProject({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Project)
  async deleteProject(
    @graphql.Args() args: DeleteProjectArgs
  ): Promise<Project | null> {
    try {
      return await this.service.deleteProject(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ProjectUser], { name: "users" })
  async findUsers(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: ProjectUserFindManyArgs
  ): Promise<ProjectUser[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ProjectInvite], { name: "invites" })
  async findInvites(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: ProjectInviteFindManyArgs
  ): Promise<ProjectInvite[]> {
    const results = await this.service.findInvites(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Test], { name: "tests" })
  async findTests(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: TestFindManyArgs
  ): Promise<Test[]> {
    const results = await this.service.findTests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [FeatureFlag], { name: "featureFlags" })
  async findFeatureFlags(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: FeatureFlagFindManyArgs
  ): Promise<FeatureFlag[]> {
    const results = await this.service.findFeatureFlags(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ApiRequest], { name: "apiRequests" })
  async findApiRequests(
    @graphql.Parent() parent: Project,
    @graphql.Args() args: ApiRequestFindManyArgs
  ): Promise<ApiRequest[]> {
    const results = await this.service.findApiRequests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}