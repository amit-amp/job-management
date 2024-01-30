import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiRequestServiceBase } from "./base/apiRequest.service.base";

@Injectable()
export class ApiRequestService extends ApiRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
