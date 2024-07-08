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
  ValidateNested,
  IsEnum,
} from "class-validator";
import { NotificationUpdateManyWithoutClientsInput } from "./NotificationUpdateManyWithoutClientsInput";
import { Type } from "class-transformer";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { EnumClientRole } from "./EnumClientRole";

@InputType()
class ClientUpdateInput {
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
  name?: string | null;

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
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationUpdateManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => NotificationUpdateManyWithoutClientsInput)
  @IsOptional()
  @Field(() => NotificationUpdateManyWithoutClientsInput, {
    nullable: true,
  })
  notifications?: NotificationUpdateManyWithoutClientsInput;

  @ApiProperty({
    required: false,
    type: () => AppointmentUpdateManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentUpdateManyWithoutClientsInput)
  @IsOptional()
  @Field(() => AppointmentUpdateManyWithoutClientsInput, {
    nullable: true,
  })
  appointments?: AppointmentUpdateManyWithoutClientsInput;

  @ApiProperty({
    required: false,
    enum: EnumClientRole,
  })
  @IsEnum(EnumClientRole)
  @IsOptional()
  @Field(() => EnumClientRole, {
    nullable: true,
  })
  role?: "Option1" | null;
}

export { ClientUpdateInput as ClientUpdateInput };
