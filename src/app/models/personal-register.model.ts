import { MainResponse } from "./main-response.model";

export interface PersonalRegisterRespons extends MainResponse {
    // status: boolean;
    // message: string;
    // description: string;
    data: DataPersonalRegisterRespons;
    // transactionID: string;
    // transactionDateTime: string;
  }
  
  export interface DataPersonalRegisterRespons {
    accID: string;
    memberType: string;
    registerDate: string;
    email: string;
    phoneNumber: string;
    otpStatus: boolean;
  }

//   ----------------------------------------------------   \\

  export interface PersonalRegisterRequired {
  chkTermofService: boolean;
  chkPolicy: boolean;
  memberType: string;
  registerSource: string;
  countryCode: string;
  cK_SyCo_PhoneNumber: string;
  phoneNumber: string;
  email: string;
  password: string;
}