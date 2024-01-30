import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeatureFlagServiceBase } from "./base/featureFlag.service.base";

@Injectable()
export class FeatureFlagService extends FeatureFlagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
