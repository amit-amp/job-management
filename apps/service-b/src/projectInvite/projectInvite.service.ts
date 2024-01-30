import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectInviteServiceBase } from "./base/projectInvite.service.base";

@Injectable()
export class ProjectInviteService extends ProjectInviteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
