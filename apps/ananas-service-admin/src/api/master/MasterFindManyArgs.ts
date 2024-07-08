import { MasterWhereInput } from "./MasterWhereInput";
import { MasterOrderByInput } from "./MasterOrderByInput";

export type MasterFindManyArgs = {
  where?: MasterWhereInput;
  orderBy?: Array<MasterOrderByInput>;
  skip?: number;
  take?: number;
};
