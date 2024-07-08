import { AppointmentCreateNestedManyWithoutMasterClassesInput } from "./AppointmentCreateNestedManyWithoutMasterClassesInput";
import { MasterWhereUniqueInput } from "../master/MasterWhereUniqueInput";

export type MasterClassCreateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  appointments?: AppointmentCreateNestedManyWithoutMasterClassesInput;
  master?: MasterWhereUniqueInput | null;
};
