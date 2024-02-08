export enum PersonType {
    "PERSONAL"  = 'personal',
    "CORPORATE" = "corporate"
}

export enum OtpType {
    "MOBLIE"    = "mobile",
    "EMAIL"     = "email"
}

export enum PinType {
    "SETUP"     = 'setup',
    "CONFIRM"   = 'confirm'
}

export enum CustomerStorageType {
    "PINSETUP" = 'pin-setup',
}

export enum TradeTyp {
    "BUY" = "buy",
    "SELL" = "sell",
}

export enum ConditionTread {}

export enum UserStorage {
    "USER_ACCESS_TOKEN" = 'u_a_t',
    "USER_REFRESH_TOKEN" = 'u_r_t',
    "USER_IS_LOGGED_IN" = 'u_lg_i',
    "USER_ACC_ID" = 'u_acc_id',
    "USER_CLIENT_ID" = 'u_c_id',
    "USER_PHONE_NUMBER" = 'u_p_n',
    "USER_EMAIL" = 'u_e_m',
}

export enum MarketingStorage {
    "MARKETING_ACCESS_TOKEN" = 'm_a_t',
    "MARKETING_REFRESH_TOKEN" = 'm_r_t',
    "MARKETING_DATA_SIGGED_IN" = 'm_d_s_i',
    "MARKETING_IS_LOGGED_IN" = 'm_lg_i',
}