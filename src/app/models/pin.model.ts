import { MainResponse } from "./main-response.model";

export interface CreatePin {
    accId: string;
    pinNumber: string;
    save?: boolean;
}

export interface PinResponse extends MainResponse {}