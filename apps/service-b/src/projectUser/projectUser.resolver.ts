import * as graphql from "@nestjs/graphql";
import { ProjectUserResolverBase } from "./base/projectUser.resolver.base";
import { ProjectUser } from "./base/ProjectUser";
import { ProjectUserService } from "./projectUser.service";

@graphql.Resolver(() => ProjectUser)
export class ProjectUserResolver extends ProjectUserResolverBase {
  constructor(protected readonly service: ProjectUserService) {
    super(service);
  }
}
