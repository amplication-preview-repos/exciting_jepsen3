import { Client } from "../client/Client";

export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  sentAt: Date | null;
  client?: Client | null;
};
