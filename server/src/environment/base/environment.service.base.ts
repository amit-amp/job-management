/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Environment } from "@prisma/client";

export class EnvironmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EnvironmentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentCountArgs>
  ): Promise<number> {
    return this.prisma.environment.count(args);
  }

  async environments<T extends Prisma.EnvironmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentFindManyArgs>
  ): Promise<Environment[]> {
    return this.prisma.environment.findMany(args);
  }
  async environment<T extends Prisma.EnvironmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentFindUniqueArgs>
  ): Promise<Environment | null> {
    return this.prisma.environment.findUnique(args);
  }
  async createEnvironment<T extends Prisma.EnvironmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentCreateArgs>
  ): Promise<Environment> {
    return this.prisma.environment.create<T>(args);
  }
  async updateEnvironment<T extends Prisma.EnvironmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentUpdateArgs>
  ): Promise<Environment> {
    return this.prisma.environment.update<T>(args);
  }
  async deleteEnvironment<T extends Prisma.EnvironmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentDeleteArgs>
  ): Promise<Environment> {
    return this.prisma.environment.delete(args);
  }
}