import * as graphql from "@nestjs/graphql";
import { ProjectInviteResolverBase } from "./base/projectInvite.resolver.base";
import { ProjectInvite } from "./base/ProjectInvite";
import { ProjectInviteService } from "./projectInvite.service";

@graphql.Resolver(() => ProjectInvite)
export class ProjectInviteResolver extends ProjectInviteResolverBase {
  constructor(protected readonly service: ProjectInviteService) {
    super(service);
  }
}
