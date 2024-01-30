import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeatureFlagValueServiceBase } from "./base/featureFlagValue.service.base";

@Injectable()
export class FeatureFlagValueService extends FeatureFlagValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
