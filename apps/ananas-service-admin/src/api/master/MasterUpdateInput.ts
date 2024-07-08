import { MasterClassUpdateManyWithoutMastersInput } from "./MasterClassUpdateManyWithoutMastersInput";

export type MasterUpdateInput = {
  name?: string | null;
  specialization?: string | null;
  masterClasses?: MasterClassUpdateManyWithoutMastersInput;
  role?: "Option1" | null;
};
