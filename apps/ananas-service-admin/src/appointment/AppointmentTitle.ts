import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "timeslot";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.timeslot?.toString() || String(record.id);
};
