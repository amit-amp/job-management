import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectUserService } from "./projectUser.service";
import { ProjectUserControllerBase } from "./base/projectUser.controller.base";

@swagger.ApiTags("projectUsers")
@common.Controller("projectUsers")
export class ProjectUserController extends ProjectUserControllerBase {
  constructor(protected readonly service: ProjectUserService) {
    super(service);
  }
}
