import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExampleService } from "./example.service";
import { ExampleControllerBase } from "./base/example.controller.base";

@swagger.ApiTags("examples")
@common.Controller("examples")
export class ExampleController extends ExampleControllerBase {
  constructor(
    protected readonly service: ExampleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
