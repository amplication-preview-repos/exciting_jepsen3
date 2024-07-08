import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MasterClassListRelationFilter } from "../masterClass/MasterClassListRelationFilter";

export type MasterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  specialization?: StringNullableFilter;
  masterClasses?: MasterClassListRelationFilter;
  role?: "Option1";
};
