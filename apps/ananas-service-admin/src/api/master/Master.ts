import { MasterClass } from "../masterClass/MasterClass";

export type Master = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  specialization: string | null;
  masterClasses?: Array<MasterClass>;
  role?: "Option1" | null;
};
