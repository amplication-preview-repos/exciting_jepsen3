import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MasterClassModuleBase } from "./base/masterClass.module.base";
import { MasterClassService } from "./masterClass.service";
import { MasterClassController } from "./masterClass.controller";
import { MasterClassResolver } from "./masterClass.resolver";

@Module({
  imports: [MasterClassModuleBase, forwardRef(() => AuthModule)],
  controllers: [MasterClassController],
  providers: [MasterClassService, MasterClassResolver],
  exports: [MasterClassService],
})
export class MasterClassModule {}
