export interface NotiSettingModel {
    MemberId: string;
    NotiBuySell: boolean;
    NotiClearing: boolean;
    NotiSystem: boolean;
    NotiNews: boolean;
  }

  export interface NotificationConfigRespons {
    status: string;
    data: NotificationConfigModel;
  }

  export interface NotificationConfigModel {
    _id: string;
    MemberId: string;
    Active: boolean;
    AvailableMarginBalance: number;
    AvailableStock96: number;
    AvailableStock99: number;
    AvailableTotalFreeMarginBuy: number;
    AvailableTotalFreeMarginSell: number;
    AvailableforCutGold96: number;
    AvailableforCutGold99: number;
    BalanceStock96: number;
    BalanceStock99: number;
    CBAvailableStock96: number;
    CBAvailableStock99: number;
    CBBalanceStock96: number;
    CBBalanceStock99: number;
    CBOpenOrderBuy96: number;
    CBOpenOrderBuy99: number;
    CBOpenOrderSell96: number;
    CBOpenOrderSell99: number;
    CK_SyBr: string;
    CK_SyMTe: string;
    CK_SyPNa_Person?: any;
    CK_UserID: string;
    ConfigNoti_Clearing: string;
    ConfigNoti_Order: string;
    ConfigNoti_PRNews: string;
    ConfigNoti_SystemNews: string;
    CreateBy: string;
    CreateDate: string;
    FK_SyACTy_Person?: any;
    LimitVolumeBuy96: number;
    LimitVolumeBuy99: number;
    LimitVolumeSell96: number;
    LimitVolumeSell99: number;
    MarginBalance: number;
    MemberRef: string;
    MemberType: string;
    OpenOrderBuy96: number;
    OpenOrderBuy99: number;
    OpenOrderSell96: number;
    OpenOrderSell99: number;
    OutstandingBuy96: number;
    OutstandingBuy99: number;
    OutstandingSell96: number;
    OutstandingSell99: number;
    PINCode: number;
    PersonEmail: string;
    PersonFirstNameTH: string;
    PersonLastNameTH: string;
    PersonMobile: string;
    StatusBuy: string;
    StatusSell: string;
    TotalFreeMarginBuy: number;
    TotalFreeMarginSell: number;
    TradingDuedate: number;
    TradingFreeMargin: number;
    TradingLevel: number;
    UpdateBy: string;
    UpdateDate: string;
    UseFreeMarginBuy: number;
    UseFreeMarginSell: number;
    NotiBuySell: boolean;
    NotiClearing: boolean;
    NotiNews: boolean;
    NotiSystem: boolean;
  }