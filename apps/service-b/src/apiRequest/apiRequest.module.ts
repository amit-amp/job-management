import { Module } from "@nestjs/common";
import { ApiRequestModuleBase } from "./base/apiRequest.module.base";
import { ApiRequestService } from "./apiRequest.service";
import { ApiRequestController } from "./apiRequest.controller";
import { ApiRequestResolver } from "./apiRequest.resolver";

@Module({
  imports: [ApiRequestModuleBase],
  controllers: [ApiRequestController],
  providers: [ApiRequestService, ApiRequestResolver],
  exports: [ApiRequestService],
})
export class ApiRequestModule {}
