/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MasterClassWhereUniqueInput } from "./MasterClassWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteMasterClassArgs {
  @ApiProperty({
    required: true,
    type: () => MasterClassWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MasterClassWhereUniqueInput)
  @Field(() => MasterClassWhereUniqueInput, { nullable: false })
  where!: MasterClassWhereUniqueInput;
}

export { DeleteMasterClassArgs as DeleteMasterClassArgs };
