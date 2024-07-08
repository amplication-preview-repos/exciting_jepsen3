import { Master as TMaster } from "../api/master/Master";

export const MASTER_TITLE_FIELD = "name";

export const MasterTitle = (record: TMaster): string => {
  return record.name?.toString() || String(record.id);
};
