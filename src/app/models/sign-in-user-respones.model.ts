import { MainResponse } from "./main-response.model";

export interface SignInUserResponse extends MainResponse {
  // status: boolean;
  // message: string;
  // description: string;
  data: DataSignInUser | string;
  // transactionID: string;
  // transactionDateTime: string;
}

export interface DataSignInUser {
  token: string;
  refreshToken: string;
  clientID: string;
  accID: string;
  otpActivated: boolean;
  email: string;
  phoneNumber: string;
}