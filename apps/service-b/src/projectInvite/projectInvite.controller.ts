import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectInviteService } from "./projectInvite.service";
import { ProjectInviteControllerBase } from "./base/projectInvite.controller.base";

@swagger.ApiTags("projectInvites")
@common.Controller("projectInvites")
export class ProjectInviteController extends ProjectInviteControllerBase {
  constructor(protected readonly service: ProjectInviteService) {
    super(service);
  }
}
