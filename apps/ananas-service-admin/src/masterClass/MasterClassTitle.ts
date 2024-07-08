import { MasterClass as TMasterClass } from "../api/masterClass/MasterClass";

export const MASTERCLASS_TITLE_FIELD = "title";

export const MasterClassTitle = (record: TMasterClass): string => {
  return record.title?.toString() || String(record.id);
};
