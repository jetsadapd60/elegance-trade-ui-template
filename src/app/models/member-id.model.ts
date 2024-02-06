import { MainResponse } from "./main-response.model";

export interface MemberIdResponse extends MainResponse {
  data: DataMemberId;
}

export interface DataMemberId {
  memberId: string;
  memberIdByAccountType: any[];
}