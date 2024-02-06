import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment.development";
import { OtpRespons } from "../models/otp.model";

@Injectable()
export class OtpService {

    private readonly BASE_URI: string = environment.backend_api_uri;

    constructor(private http: HttpService) {}

    verifyOtpSms(dataOtp: any) {
        return this.http.post<OtpRespons>(`${this.BASE_URI}FrontendMember/OtpActivateSms`, dataOtp);
    }

    verifyOtpEmail(dataOtp: any) {
        return this.http.post<OtpRespons>(`${this.BASE_URI}FrontendMember/OtpActivateEmail`, dataOtp);
    }

    tryAgainOtpSms(accid: string) {
        return this.http.get<OtpRespons>(`${this.BASE_URI}FrontendMember/NewOtpActivateSms/${accid}`);
    }

    tryAgainOtpEmail(accid: string) {
        return this.http.get<OtpRespons>(`${this.BASE_URI}FrontendMember/NewOtpActivateEmail/${accid}`);
    }
}