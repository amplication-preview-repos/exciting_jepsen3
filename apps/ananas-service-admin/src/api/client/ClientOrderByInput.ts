import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  email?: SortOrder;
  role?: SortOrder;
};