import { Client } from "../client/Client";
import { MasterClass } from "../masterClass/MasterClass";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timeslot: string | null;
  client?: Client | null;
  masterClass?: MasterClass | null;
};
