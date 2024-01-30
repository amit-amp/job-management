import { Module } from "@nestjs/common";
import { ProjectInviteModuleBase } from "./base/projectInvite.module.base";
import { ProjectInviteService } from "./projectInvite.service";
import { ProjectInviteController } from "./projectInvite.controller";
import { ProjectInviteResolver } from "./projectInvite.resolver";

@Module({
  imports: [ProjectInviteModuleBase],
  controllers: [ProjectInviteController],
  providers: [ProjectInviteService, ProjectInviteResolver],
  exports: [ProjectInviteService],
})
export class ProjectInviteModule {}
