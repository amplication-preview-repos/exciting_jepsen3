/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Master } from "./Master";
import { MasterCountArgs } from "./MasterCountArgs";
import { MasterFindManyArgs } from "./MasterFindManyArgs";
import { MasterFindUniqueArgs } from "./MasterFindUniqueArgs";
import { CreateMasterArgs } from "./CreateMasterArgs";
import { UpdateMasterArgs } from "./UpdateMasterArgs";
import { DeleteMasterArgs } from "./DeleteMasterArgs";
import { MasterClassFindManyArgs } from "../../masterClass/base/MasterClassFindManyArgs";
import { MasterClass } from "../../masterClass/base/MasterClass";
import { MasterService } from "../master.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Master)
export class MasterResolverBase {
  constructor(
    protected readonly service: MasterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Master",
    action: "read",
    possession: "any",
  })
  async _mastersMeta(
    @graphql.Args() args: MasterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Master])
  @nestAccessControl.UseRoles({
    resource: "Master",
    action: "read",
    possession: "any",
  })
  async masters(@graphql.Args() args: MasterFindManyArgs): Promise<Master[]> {
    return this.service.masters(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Master, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Master",
    action: "read",
    possession: "own",
  })
  async master(
    @graphql.Args() args: MasterFindUniqueArgs
  ): Promise<Master | null> {
    const result = await this.service.master(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Master)
  @nestAccessControl.UseRoles({
    resource: "Master",
    action: "create",
    possession: "any",
  })
  async createMaster(@graphql.Args() args: CreateMasterArgs): Promise<Master> {
    return await this.service.createMaster({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Master)
  @nestAccessControl.UseRoles({
    resource: "Master",
    action: "update",
    possession: "any",
  })
  async updateMaster(
    @graphql.Args() args: UpdateMasterArgs
  ): Promise<Master | null> {
    try {
      return await this.service.updateMaster({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Master)
  @nestAccessControl.UseRoles({
    resource: "Master",
    action: "delete",
    possession: "any",
  })
  async deleteMaster(
    @graphql.Args() args: DeleteMasterArgs
  ): Promise<Master | null> {
    try {
      return await this.service.deleteMaster(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MasterClass], { name: "masterClasses" })
  @nestAccessControl.UseRoles({
    resource: "MasterClass",
    action: "read",
    possession: "any",
  })
  async findMasterClasses(
    @graphql.Parent() parent: Master,
    @graphql.Args() args: MasterClassFindManyArgs
  ): Promise<MasterClass[]> {
    const results = await this.service.findMasterClasses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}