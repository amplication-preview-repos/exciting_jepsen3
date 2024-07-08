import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { MasterClassWhereUniqueInput } from "../masterClass/MasterClassWhereUniqueInput";

export type AppointmentUpdateInput = {
  timeslot?: string | null;
  client?: ClientWhereUniqueInput | null;
  masterClass?: MasterClassWhereUniqueInput | null;
};
