import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timeslot?: SortOrder;
  clientId?: SortOrder;
  masterClassId?: SortOrder;
};
