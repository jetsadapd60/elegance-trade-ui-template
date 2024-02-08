import { MainResponse } from "./main-response.model";

export interface BankNameModel extends MainResponse {
    data: BankNameDataModel[];
  }
  
  export interface BankNameDataModel {
    pK_SyBa: string;
    picture: string;
    code: string;
    name: string;
    sort: number;
    bankAccountNo?: string;
  }