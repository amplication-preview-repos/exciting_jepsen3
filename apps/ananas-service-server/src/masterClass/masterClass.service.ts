import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MasterClassServiceBase } from "./base/masterClass.service.base";

@Injectable()
export class MasterClassService extends MasterClassServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
