import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { HttpService } from "./http.service";
import { SignInUserResponse } from "../models/sign-in-user-respones.model";
import { SignInRequired } from "../models/sign-in-requred.model";
import { Observable, map } from "rxjs";
import { Router } from "@angular/router";
import { SignInMarketingResponse } from "../models/sign-in-marketing-respones.model";
import { PersonalRegisterRequired, PersonalRegisterRespons } from "../models/personal-register.model";

@Injectable()
export class AuthService {

    private readonly USER_ACCOUNT_CENTER_URI: string = environment.account_center_uri;
    private readonly MARKETING_ACCOUNT_CENTER_URI: string = environment.backend_api_uri;


    constructor(private httpService: HttpService, private router: Router) { }

    /**
     * สำหรับ Login ด้วย User
     * @returns Observable
     */
    signInByUser(singInData: SignInRequired): Observable<SignInUserResponse> {
        return this.httpService.post<SignInUserResponse>(`${this.USER_ACCOUNT_CENTER_URI}Auth/Login`, singInData)
    }
    
    /**
     * สำหรับ Login ด้วย Marketing
     * @returns Observable
     */
    signInBuyMarketing(singInData: SignInRequired): Observable<SignInMarketingResponse> {
        return this.httpService.post<SignInMarketingResponse>(`${this.MARKETING_ACCOUNT_CENTER_URI}BackendAuth/Login`, singInData)
    }


    personalRegister(data: PersonalRegisterRequired) {
        return this.httpService.post<PersonalRegisterRespons>(`${this.MARKETING_ACCOUNT_CENTER_URI}FrontendMember/Register`, data);
    }



}