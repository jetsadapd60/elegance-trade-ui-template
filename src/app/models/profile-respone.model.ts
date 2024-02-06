import { HouseRegisAddress } from "./ekyc.model";
import { MainResponse } from "./main-response.model";

export interface ProfileRespone extends MainResponse {
  data: DataProfile;
}

export interface DataProfile {
  accId: string;
  profileImage: string;
  memberType: string;
  registerDate: string;
  registerSource: string;
  statusAccount: string;
  statusKYC: string;
  statusBankAccount: string;
  countryCode: string;
  otpStatus: boolean;
  mobileKycActionPage: string;
  mobileBankAccActionPage: string;
  member: MemberProfile;
}

export interface MemberProfile {
  memberId: string;
  cK_SyACTy: string[];
  cK_SyCo_PersonNationality: string;
  personNationality: string;
  firstName: string;
  lastName: string;
  idCard: string;
  idCardImage: string;
  birthDay: string;
  email: string;
  cK_SyCo_PersonMobile?: any;
  mobile: string;
  houseRegisAddress: HouseRegisAddress;
  residentAddress: HouseRegisAddress;
  sendingDocAddress: HouseRegisAddress;
  cK_SyJPo: string;
  jobPosition: string;
  companyName: string;
  cK_SyMIn_Month: string;
  incomePerMonth: string;
  cK_SyMIn_Year: string;
  incomePerYear: string;
  cK_SySFu: string;
  sourceOfFund: string;
  sourceOfFundOther?: any;
  accountNo: string;
  fK_SyACTy?: any;
  accountType: string;
  cK_SyBa: string;
  bank: string;
  bookBankImage: string;
  statusBuy: boolean;
  statusSell: boolean;
  tradingLevel: number;
  tradingDuedate: number;
  tradingFreeMargin: number;
  balanceStock99: number;
  balanceStock96: number;
  marginBalance: number;
  outstandingBuy96: number;
  outstandingBuy99: number;
  outstandingSell96: number;
  outstandingSell99: number;
  limitVolumeBuy96: number;
  limitVolumeBuy99: number;
  limitVolumeSell96: number;
  limitVolumeSell99: number;
  marketingTeamID: string;
  marketingTeamName: string;
}
