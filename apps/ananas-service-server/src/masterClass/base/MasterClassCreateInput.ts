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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { AppointmentCreateNestedManyWithoutMasterClassesInput } from "./AppointmentCreateNestedManyWithoutMasterClassesInput";
import { MasterWhereUniqueInput } from "../../master/base/MasterWhereUniqueInput";

@InputType()
class MasterClassCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutMasterClassesInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutMasterClassesInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutMasterClassesInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutMasterClassesInput;

  @ApiProperty({
    required: false,
    type: () => MasterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MasterWhereUniqueInput)
  @IsOptional()
  @Field(() => MasterWhereUniqueInput, {
    nullable: true,
  })
  master?: MasterWhereUniqueInput | null;
}

export { MasterClassCreateInput as MasterClassCreateInput };
