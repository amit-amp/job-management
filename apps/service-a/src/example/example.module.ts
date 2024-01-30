import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExampleModuleBase } from "./base/example.module.base";
import { ExampleService } from "./example.service";
import { ExampleController } from "./example.controller";
import { ExampleResolver } from "./example.resolver";

@Module({
  imports: [ExampleModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleResolver],
  exports: [ExampleService],
})
export class ExampleModule {}
