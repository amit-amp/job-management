import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectUserServiceBase } from "./base/projectUser.service.base";

@Injectable()
export class ProjectUserService extends ProjectUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
