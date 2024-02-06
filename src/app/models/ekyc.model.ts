export type MobileKycActionPage = "KycPage1" | "KycPage2"| "KycPage3"| "KycPage4"| "KycPage5"| "KycPage6"| "KycPage7"| "KycPage8";

export interface EKycModel {
  mobileKycActionPage: MobileKycActionPage;
  cK_SyCo_PersonNationality: string;
  firstName: string;
  lastName: string;
  idCard: string;
  cK_SyACTy: string[];
  idCardImage: string;
  birthDay: string;
  email: string;
  cK_SyCo_PersonMobile: string;
  mobile: string;
  cK_SyJPo: string;
  companyName: string;
  cK_SyMIn_Month: string;
  cK_SyMIn_Year: string;
  cK_SySFu: string;
  sourceFundOther: string;
  houseRegisAddress: HouseRegisAddress;
  residentAddress: HouseRegisAddress;
  sendingDocAddress: HouseRegisAddress;
  state: boolean;
}


export interface EKycRespone {
  status: boolean;
  message: string;
  description: string;
  data: string;
  transactionID: string;
  transactionDateTime: string;
}

export interface HouseRegisAddress {
  addressNo: string | null;
  addressMoo: string | null;
  addressBuilding: string | null;
  addressFloor: string | null;
  addressSoi: string | null;
  addressStreet: string | null;
  addressZipCode: string | null;
  cK_SyPr: string | null;
  cK_SyAm: string | null;
  cK_SyDi: string | null;
  provine?: string;
  amphure?: string;
  district?: string;
}