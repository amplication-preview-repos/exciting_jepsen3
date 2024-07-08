import { Appointment } from "../appointment/Appointment";
import { Master } from "../master/Master";

export type MasterClass = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  date: Date | null;
  appointments?: Array<Appointment>;
  master?: Master | null;
};
