import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeatureFlagHistoryServiceBase } from "./base/featureFlagHistory.service.base";

@Injectable()
export class FeatureFlagHistoryService extends FeatureFlagHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
