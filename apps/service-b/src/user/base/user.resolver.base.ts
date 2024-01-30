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
import { User } from "./User";
import { UserCountArgs } from "./UserCountArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { ProjectUserFindManyArgs } from "../../projectUser/base/ProjectUserFindManyArgs";
import { ProjectUser } from "../../projectUser/base/ProjectUser";
import { ProjectInviteFindManyArgs } from "../../projectInvite/base/ProjectInviteFindManyArgs";
import { ProjectInvite } from "../../projectInvite/base/ProjectInvite";
import { FeatureFlagHistoryFindManyArgs } from "../../featureFlagHistory/base/FeatureFlagHistoryFindManyArgs";
import { FeatureFlagHistory } from "../../featureFlagHistory/base/FeatureFlagHistory";
import { CouponCodeFindManyArgs } from "../../couponCode/base/CouponCodeFindManyArgs";
import { CouponCode } from "../../couponCode/base/CouponCode";
import { ApiKeyFindManyArgs } from "../../apiKey/base/ApiKeyFindManyArgs";
import { ApiKey } from "../../apiKey/base/ApiKey";
import { UserService } from "../user.service";
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(protected readonly service: UserService) {}

  async _usersMeta(
    @graphql.Args() args: UserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [User])
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.users(args);
  }

  @graphql.Query(() => User, { nullable: true })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.user(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => User)
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.createUser({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => User)
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.updateUser({
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

  @graphql.Mutation(() => User)
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
    try {
      return await this.service.deleteUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ProjectUser], { name: "projects" })
  async findProjects(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ProjectUserFindManyArgs
  ): Promise<ProjectUser[]> {
    const results = await this.service.findProjects(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ProjectInvite], { name: "invites" })
  async findInvites(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ProjectInviteFindManyArgs
  ): Promise<ProjectInvite[]> {
    const results = await this.service.findInvites(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [FeatureFlagHistory], {
    name: "featureFlagHistory",
  })
  async findFeatureFlagHistory(
    @graphql.Parent() parent: User,
    @graphql.Args() args: FeatureFlagHistoryFindManyArgs
  ): Promise<FeatureFlagHistory[]> {
    const results = await this.service.findFeatureFlagHistory(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [CouponCode], { name: "couponCodes" })
  async findCouponCodes(
    @graphql.Parent() parent: User,
    @graphql.Args() args: CouponCodeFindManyArgs
  ): Promise<CouponCode[]> {
    const results = await this.service.findCouponCodes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ApiKey], { name: "apiKeys" })
  async findApiKeys(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ApiKeyFindManyArgs
  ): Promise<ApiKey[]> {
    const results = await this.service.findApiKeys(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}