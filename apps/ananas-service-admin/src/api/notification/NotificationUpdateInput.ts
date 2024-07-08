import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  sentAt?: Date | null;
  client?: ClientWhereUniqueInput | null;
};
