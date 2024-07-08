import { SortOrder } from "../../util/SortOrder";

export type MasterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  specialization?: SortOrder;
  role?: SortOrder;
};
