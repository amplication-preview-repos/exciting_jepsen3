import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  email?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  role?: "Option1";
};
