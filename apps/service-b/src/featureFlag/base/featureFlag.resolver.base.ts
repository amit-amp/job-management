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
import { FeatureFlag } from "./FeatureFlag";
import { FeatureFlagCountArgs } from "./FeatureFlagCountArgs";
import { FeatureFlagFindManyArgs } from "./FeatureFlagFindManyArgs";
import { FeatureFlagFindUniqueArgs } from "./FeatureFlagFindUniqueArgs";
import { CreateFeatureFlagArgs } from "./CreateFeatureFlagArgs";
import { UpdateFeatureFlagArgs } from "./UpdateFeatureFlagArgs";
import { DeleteFeatureFlagArgs } from "./DeleteFeatureFlagArgs";
import { FeatureFlagValueFindManyArgs } from "../../featureFlagValue/base/FeatureFlagValueFindManyArgs";
import { FeatureFlagValue } from "../../featureFlagValue/base/FeatureFlagValue";
import { Project } from "../../project/base/Project";
import { FeatureFlagService } from "../featureFlag.service";
@graphql.Resolver(() => FeatureFlag)
export class FeatureFlagResolverBase {
  constructor(protected readonly service: FeatureFlagService) {}

  async _featureFlagsMeta(
    @graphql.Args() args: FeatureFlagCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FeatureFlag])
  async featureFlags(
    @graphql.Args() args: FeatureFlagFindManyArgs
  ): Promise<FeatureFlag[]> {
    return this.service.featureFlags(args);
  }

  @graphql.Query(() => FeatureFlag, { nullable: true })
  async featureFlag(
    @graphql.Args() args: FeatureFlagFindUniqueArgs
  ): Promise<FeatureFlag | null> {
    const result = await this.service.featureFlag(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FeatureFlag)
  async createFeatureFlag(
    @graphql.Args() args: CreateFeatureFlagArgs
  ): Promise<FeatureFlag> {
    return await this.service.createFeatureFlag({
      ...args,
      data: {
        ...args.data,

        project: {
          connect: args.data.project,
        },
      },
    });
  }

  @graphql.Mutation(() => FeatureFlag)
  async updateFeatureFlag(
    @graphql.Args() args: UpdateFeatureFlagArgs
  ): Promise<FeatureFlag | null> {
    try {
      return await this.service.updateFeatureFlag({
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

  @graphql.Mutation(() => FeatureFlag)
  async deleteFeatureFlag(
    @graphql.Args() args: DeleteFeatureFlagArgs
  ): Promise<FeatureFlag | null> {
    try {
      return await this.service.deleteFeatureFlag(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [FeatureFlagValue], { name: "values" })
  async findValues(
    @graphql.Parent() parent: FeatureFlag,
    @graphql.Args() args: FeatureFlagValueFindManyArgs
  ): Promise<FeatureFlagValue[]> {
    const results = await this.service.findValues(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  async getProject(
    @graphql.Parent() parent: FeatureFlag
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}