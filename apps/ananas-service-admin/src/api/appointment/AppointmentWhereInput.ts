import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { MasterClassWhereUniqueInput } from "../masterClass/MasterClassWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  timeslot?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  masterClass?: MasterClassWhereUniqueInput;
};
