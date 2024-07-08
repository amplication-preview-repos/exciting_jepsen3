import { SortOrder } from "../../util/SortOrder";

export type MasterClassOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  date?: SortOrder;
  masterId?: SortOrder;
};
