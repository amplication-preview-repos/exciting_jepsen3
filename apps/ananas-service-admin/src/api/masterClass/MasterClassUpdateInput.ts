import { AppointmentUpdateManyWithoutMasterClassesInput } from "./AppointmentUpdateManyWithoutMasterClassesInput";
import { MasterWhereUniqueInput } from "../master/MasterWhereUniqueInput";

export type MasterClassUpdateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  appointments?: AppointmentUpdateManyWithoutMasterClassesInput;
  master?: MasterWhereUniqueInput | null;
};
