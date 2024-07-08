/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MasterClassService } from "../masterClass.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MasterClassCreateInput } from "./MasterClassCreateInput";
import { MasterClass } from "./MasterClass";
import { MasterClassFindManyArgs } from "./MasterClassFindManyArgs";
import { MasterClassWhereUniqueInput } from "./MasterClassWhereUniqueInput";
import { MasterClassUpdateInput } from "./MasterClassUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MasterClassControllerBase {
  constructor(
    protected readonly service: MasterClassService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MasterClass })
  @nestAccessControl.UseRoles({
    resource: "MasterClass",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMasterClass(
    @common.Body() data: MasterClassCreateInput
  ): Promise<MasterClass> {
    return await this.service.createMasterClass({
      data: {
        ...data,

        master: data.master
          ? {
              connect: data.master,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        date: true,

        master: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MasterClass] })
  @ApiNestedQuery(MasterClassFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MasterClass",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async masterClasses(@common.Req() request: Request): Promise<MasterClass[]> {
    const args = plainToClass(MasterClassFindManyArgs, request.query);
    return this.service.masterClasses({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        date: true,

        master: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MasterClass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MasterClass",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async masterClass(
    @common.Param() params: MasterClassWhereUniqueInput
  ): Promise<MasterClass | null> {
    const result = await this.service.masterClass({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        date: true,

        master: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MasterClass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MasterClass",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMasterClass(
    @common.Param() params: MasterClassWhereUniqueInput,
    @common.Body() data: MasterClassUpdateInput
  ): Promise<MasterClass | null> {
    try {
      return await this.service.updateMasterClass({
        where: params,
        data: {
          ...data,

          master: data.master
            ? {
                connect: data.master,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,
          date: true,

          master: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MasterClass })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MasterClass",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMasterClass(
    @common.Param() params: MasterClassWhereUniqueInput
  ): Promise<MasterClass | null> {
    try {
      return await this.service.deleteMasterClass({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,
          date: true,

          master: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: MasterClassWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        timeslot: true,

        client: {
          select: {
            id: true,
          },
        },

        masterClass: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "MasterClass",
    action: "update",
    possession: "any",
  })
  async connectAppointments(
    @common.Param() params: MasterClassWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateMasterClass({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "MasterClass",
    action: "update",
    possession: "any",
  })
  async updateAppointments(
    @common.Param() params: MasterClassWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateMasterClass({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "MasterClass",
    action: "update",
    possession: "any",
  })
  async disconnectAppointments(
    @common.Param() params: MasterClassWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateMasterClass({
      where: params,
      data,
      select: { id: true },
    });
  }
}
