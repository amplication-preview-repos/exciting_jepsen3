import { NotificationUpdateManyWithoutClientsInput } from "./NotificationUpdateManyWithoutClientsInput";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  notifications?: NotificationUpdateManyWithoutClientsInput;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  role?: "Option1" | null;
};
