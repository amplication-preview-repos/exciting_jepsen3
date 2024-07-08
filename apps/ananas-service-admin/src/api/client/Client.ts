import { Notification } from "../notification/Notification";
import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  phone: string | null;
  email: string | null;
  notifications?: Array<Notification>;
  appointments?: Array<Appointment>;
  role?: "Option1" | null;
};
