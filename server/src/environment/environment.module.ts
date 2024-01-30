import { Module } from "@nestjs/common";
import { EnvironmentModuleBase } from "./base/environment.module.base";
import { EnvironmentService } from "./environment.service";
import { EnvironmentResolver } from "./environment.resolver";

@Module({
  imports: [EnvironmentModuleBase],
  providers: [EnvironmentService, EnvironmentResolver],
  exports: [EnvironmentService],
})
export class EnvironmentModule {}
