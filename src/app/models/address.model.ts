import { MainResponse } from './main-response.model';

export interface ProvinceResponse extends MainResponse {
  data      : DataProvince[];
}

export interface DataProvince {
  pK_SyPr   : string;
  name_Th   : string;
  name_En   : string;
  code      : number;
  select    : boolean;
}

export interface AmphureResponse extends MainResponse {
  data      : DataAmphure[];
}

export interface DataAmphure {
  pK_SyAm   : string;
  cK_SyPr   : string;
  name_Th   : string;
  name_En   : string;
  code      : number;
  select    : boolean;
}

export interface DistinctResponse extends MainResponse {
  data      : DataDistinct[];
}

export interface DataDistinct {
  pK_SyDi   : string;
  cK_SyAm   : string;
  name_Th   :string;
  name_En   : string;
  code      : string;
  select    : boolean;
}
