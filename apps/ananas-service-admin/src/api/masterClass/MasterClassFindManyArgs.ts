import { MasterClassWhereInput } from "./MasterClassWhereInput";
import { MasterClassOrderByInput } from "./MasterClassOrderByInput";

export type MasterClassFindManyArgs = {
  where?: MasterClassWhereInput;
  orderBy?: Array<MasterClassOrderByInput>;
  skip?: number;
  take?: number;
};
