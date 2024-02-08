import { MainResponse } from "./main-response.model";


export interface SignInMarketingResponse extends MainResponse {
  // status: boolean;
  // message: string;
  // description: string;
  data: DataSignInMarketing;
  // transactionID: string;
  // transactionDateTime: string;
}

export interface DataSignInMarketing {
  token: string;
  refreshToken: string;
  clientID: string;
  userID: string;
  fullName: string;
  userType: string;
  roleID: string;
  roleName: string;
  fk_SyMTe: string;
  marketingTeam: string;
  permission: Permission[];
  permisGroup: string[];
}

interface Permission {
  orderBy: number;
  menuName: string;
  menuNameEn: string;
  menuCode: string;
  menuLink?: string;
  isView: boolean;
  isAdd: boolean;
  isEdit: boolean;
  isDelete: boolean;
  isApprove: boolean;
}