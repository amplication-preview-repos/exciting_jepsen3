import { NotificationCreateNestedManyWithoutClientsInput } from "./NotificationCreateNestedManyWithoutClientsInput";
import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  notifications?: NotificationCreateNestedManyWithoutClientsInput;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  role?: "Option1" | null;
};
