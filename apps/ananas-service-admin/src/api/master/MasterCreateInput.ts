import { MasterClassCreateNestedManyWithoutMastersInput } from "./MasterClassCreateNestedManyWithoutMastersInput";

export type MasterCreateInput = {
  name?: string | null;
  specialization?: string | null;
  masterClasses?: MasterClassCreateNestedManyWithoutMastersInput;
  role?: "Option1" | null;
};
