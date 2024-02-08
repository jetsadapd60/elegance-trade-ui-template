export interface ProfileResponse {
  status: boolean;
  message: string;
  description: string;
  data: DataProfile;
  transactionID: string;
  transactionDateTime: string;
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
  mobileBankAccActionPage?: any;
  member: Member;
}

export interface Member {
  memberId: string;
  cK_SyACTy: any[];
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
  accountNo?: any;
  fK_SyACTy?: any;
  accountType: string;
  cK_SyBa?: any;
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
  cbAvailableStock96: number;
  cbAvailableStock99: number;
  cbBalanceStock96: number;
  cbBalanceStock99: number;
  configNoti_Order: boolean;
  configNoti_Clearing: boolean;
  configNoti_SystemNews: boolean;
  configNoti_PRNews: boolean;
  cashBalanceBindAccount: any[];
  marketingTeamID?: any;
  marketingTeamName: string;
}

interface HouseRegisAddress {
  addressNo: string;
  addressMoo: string;
  addressBuilding: string;
  addressFloor: string;
  addressSoi: string;
  addressStreet: string;
  addressZipCode: string;
  cK_SyPr: string;
  provine: string;
  cK_SyAm: string;
  amphure: string;
  cK_SyDi: string;
  district: string;
}