import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MasterClassService } from "./masterClass.service";
import { MasterClassControllerBase } from "./base/masterClass.controller.base";

@swagger.ApiTags("masterClasses")
@common.Controller("masterClasses")
export class MasterClassController extends MasterClassControllerBase {
  constructor(
    protected readonly service: MasterClassService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
