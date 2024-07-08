import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MasterModuleBase } from "./base/master.module.base";
import { MasterService } from "./master.service";
import { MasterController } from "./master.controller";
import { MasterResolver } from "./master.resolver";

@Module({
  imports: [MasterModuleBase, forwardRef(() => AuthModule)],
  controllers: [MasterController],
  providers: [MasterService, MasterResolver],
  exports: [MasterService],
})
export class MasterModule {}
