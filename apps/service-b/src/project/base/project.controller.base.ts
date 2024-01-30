/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProjectService } from "../project.service";
import { ProjectCreateInput } from "./ProjectCreateInput";
import { Project } from "./Project";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";
import { ProjectUpdateInput } from "./ProjectUpdateInput";
import { ProjectUserFindManyArgs } from "../../projectUser/base/ProjectUserFindManyArgs";
import { ProjectUser } from "../../projectUser/base/ProjectUser";
import { ProjectUserWhereUniqueInput } from "../../projectUser/base/ProjectUserWhereUniqueInput";
import { ProjectInviteFindManyArgs } from "../../projectInvite/base/ProjectInviteFindManyArgs";
import { ProjectInvite } from "../../projectInvite/base/ProjectInvite";
import { ProjectInviteWhereUniqueInput } from "../../projectInvite/base/ProjectInviteWhereUniqueInput";
import { TestFindManyArgs } from "../../test/base/TestFindManyArgs";
import { Test } from "../../test/base/Test";
import { TestWhereUniqueInput } from "../../test/base/TestWhereUniqueInput";
import { FeatureFlagFindManyArgs } from "../../featureFlag/base/FeatureFlagFindManyArgs";
import { FeatureFlag } from "../../featureFlag/base/FeatureFlag";
import { FeatureFlagWhereUniqueInput } from "../../featureFlag/base/FeatureFlagWhereUniqueInput";
import { ApiRequestFindManyArgs } from "../../apiRequest/base/ApiRequestFindManyArgs";
import { ApiRequest } from "../../apiRequest/base/ApiRequest";
import { ApiRequestWhereUniqueInput } from "../../apiRequest/base/ApiRequestWhereUniqueInput";

export class ProjectControllerBase {
  constructor(protected readonly service: ProjectService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Project })
  async createProject(
    @common.Body() data: ProjectCreateInput
  ): Promise<Project> {
    return await this.service.createProject({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        stripeCustomerId: true,
        stripeSubscriptionId: true,
        stripePriceId: true,
        currentPeriodEnd: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Project] })
  @ApiNestedQuery(ProjectFindManyArgs)
  async projects(@common.Req() request: Request): Promise<Project[]> {
    const args = plainToClass(ProjectFindManyArgs, request.query);
    return this.service.projects({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        stripeCustomerId: true,
        stripeSubscriptionId: true,
        stripePriceId: true,
        currentPeriodEnd: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async project(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    const result = await this.service.project({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        stripeCustomerId: true,
        stripeSubscriptionId: true,
        stripePriceId: true,
        currentPeriodEnd: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProject(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() data: ProjectUpdateInput
  ): Promise<Project | null> {
    try {
      return await this.service.updateProject({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          stripeCustomerId: true,
          stripeSubscriptionId: true,
          stripePriceId: true,
          currentPeriodEnd: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProject(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    try {
      return await this.service.deleteProject({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          stripeCustomerId: true,
          stripeSubscriptionId: true,
          stripePriceId: true,
          currentPeriodEnd: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/users")
  @ApiNestedQuery(ProjectUserFindManyArgs)
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<ProjectUser[]> {
    const query = plainToClass(ProjectUserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        project: {
          select: {
            id: true,
          },
        },

        role: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  async connectUsers(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: ProjectUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  async updateUsers(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: ProjectUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  async disconnectUsers(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: ProjectUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/invites")
  @ApiNestedQuery(ProjectInviteFindManyArgs)
  async findInvites(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<ProjectInvite[]> {
    const query = plainToClass(ProjectInviteFindManyArgs, request.query);
    const results = await this.service.findInvites(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,

        project: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        usedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/invites")
  async connectInvites(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: ProjectInviteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invites: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/invites")
  async updateInvites(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: ProjectInviteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invites: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/invites")
  async disconnectInvites(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: ProjectInviteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invites: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/tests")
  @ApiNestedQuery(TestFindManyArgs)
  async findTests(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Test[]> {
    const query = plainToClass(TestFindManyArgs, request.query);
    const results = await this.service.findTests(params.id, {
      ...query,
      select: {
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tests")
  async connectTests(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: TestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tests: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tests")
  async updateTests(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: TestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tests: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tests")
  async disconnectTests(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: TestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tests: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/featureFlags")
  @ApiNestedQuery(FeatureFlagFindManyArgs)
  async findFeatureFlags(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<FeatureFlag[]> {
    const query = plainToClass(FeatureFlagFindManyArgs, request.query);
    const results = await this.service.findFeatureFlags(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        description: true,
        type: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/featureFlags")
  async connectFeatureFlags(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: FeatureFlagWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      featureFlags: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/featureFlags")
  async updateFeatureFlags(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: FeatureFlagWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      featureFlags: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/featureFlags")
  async disconnectFeatureFlags(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: FeatureFlagWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      featureFlags: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/apiRequests")
  @ApiNestedQuery(ApiRequestFindManyArgs)
  async findApiRequests(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<ApiRequest[]> {
    const query = plainToClass(ApiRequestFindManyArgs, request.query);
    const results = await this.service.findApiRequests(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        type: true,
        durationInMs: true,
        apiVersion: true,

        project: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/apiRequests")
  async connectApiRequests(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: ApiRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiRequests: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/apiRequests")
  async updateApiRequests(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: ApiRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiRequests: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/apiRequests")
  async disconnectApiRequests(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: ApiRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiRequests: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }
}