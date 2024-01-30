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
import { ApiRequest } from "./ApiRequest";
import { ApiRequestCountArgs } from "./ApiRequestCountArgs";
import { ApiRequestFindManyArgs } from "./ApiRequestFindManyArgs";
import { ApiRequestFindUniqueArgs } from "./ApiRequestFindUniqueArgs";
import { CreateApiRequestArgs } from "./CreateApiRequestArgs";
import { UpdateApiRequestArgs } from "./UpdateApiRequestArgs";
import { DeleteApiRequestArgs } from "./DeleteApiRequestArgs";
import { Project } from "../../project/base/Project";
import { ApiRequestService } from "../apiRequest.service";
@graphql.Resolver(() => ApiRequest)
export class ApiRequestResolverBase {
  constructor(protected readonly service: ApiRequestService) {}

  async _apiRequestsMeta(
    @graphql.Args() args: ApiRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ApiRequest])
  async apiRequests(
    @graphql.Args() args: ApiRequestFindManyArgs
  ): Promise<ApiRequest[]> {
    return this.service.apiRequests(args);
  }

  @graphql.Query(() => ApiRequest, { nullable: true })
  async apiRequest(
    @graphql.Args() args: ApiRequestFindUniqueArgs
  ): Promise<ApiRequest | null> {
    const result = await this.service.apiRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ApiRequest)
  async createApiRequest(
    @graphql.Args() args: CreateApiRequestArgs
  ): Promise<ApiRequest> {
    return await this.service.createApiRequest({
      ...args,
      data: {
        ...args.data,

        project: {
          connect: args.data.project,
        },
      },
    });
  }

  @graphql.Mutation(() => ApiRequest)
  async updateApiRequest(
    @graphql.Args() args: UpdateApiRequestArgs
  ): Promise<ApiRequest | null> {
    try {
      return await this.service.updateApiRequest({
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

  @graphql.Mutation(() => ApiRequest)
  async deleteApiRequest(
    @graphql.Args() args: DeleteApiRequestArgs
  ): Promise<ApiRequest | null> {
    try {
      return await this.service.deleteApiRequest(args);
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
    @graphql.Parent() parent: ApiRequest
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}