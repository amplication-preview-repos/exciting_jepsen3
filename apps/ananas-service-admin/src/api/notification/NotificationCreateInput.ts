import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  sentAt?: Date | null;
  client?: ClientWhereUniqueInput | null;
};
