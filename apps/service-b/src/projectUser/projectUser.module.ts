import { Module } from "@nestjs/common";
import { ProjectUserModuleBase } from "./base/projectUser.module.base";
import { ProjectUserService } from "./projectUser.service";
import { ProjectUserController } from "./projectUser.controller";
import { ProjectUserResolver } from "./projectUser.resolver";

@Module({
  imports: [ProjectUserModuleBase],
  controllers: [ProjectUserController],
  providers: [ProjectUserService, ProjectUserResolver],
  exports: [ProjectUserService],
})
export class ProjectUserModule {}
