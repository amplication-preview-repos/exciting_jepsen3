import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MasterServiceBase } from "./base/master.service.base";

@Injectable()
export class MasterService extends MasterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
