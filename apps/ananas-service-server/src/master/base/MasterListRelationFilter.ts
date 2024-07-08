/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MasterWhereInput } from "./MasterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MasterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MasterWhereInput,
  })
  @ValidateNested()
  @Type(() => MasterWhereInput)
  @IsOptional()
  @Field(() => MasterWhereInput, {
    nullable: true,
  })
  every?: MasterWhereInput;

  @ApiProperty({
    required: false,
    type: () => MasterWhereInput,
  })
  @ValidateNested()
  @Type(() => MasterWhereInput)
  @IsOptional()
  @Field(() => MasterWhereInput, {
    nullable: true,
  })
  some?: MasterWhereInput;

  @ApiProperty({
    required: false,
    type: () => MasterWhereInput,
  })
  @ValidateNested()
  @Type(() => MasterWhereInput)
  @IsOptional()
  @Field(() => MasterWhereInput, {
    nullable: true,
  })
  none?: MasterWhereInput;
}
export { MasterListRelationFilter as MasterListRelationFilter };
