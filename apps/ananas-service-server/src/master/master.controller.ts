import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MasterService } from "./master.service";
import { MasterControllerBase } from "./base/master.controller.base";

@swagger.ApiTags("masters")
@common.Controller("masters")
export class MasterController extends MasterControllerBase {
  constructor(
    protected readonly service: MasterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
