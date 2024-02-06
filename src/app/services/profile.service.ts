import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, map, tap } from "rxjs";
import { environment } from "src/environments/environment.development";
import { HttpService } from "./http.service";
import { TokenUserService } from "./token-user.service";
import { DataProfile, ProfileResponse } from "../models/profile.model";

@Injectable()
export class ProfileService {

    private readonly BASE_URI: string = environment.backend_api_uri;

    private profile = new BehaviorSubject<DataProfile|undefined>(undefined);

    profile$ = this.profile.asObservable();

    profileImage = this.profile$.pipe(map(res=> {
        if(res) return `${this.BASE_URI}${res.profileImage}`;
        return 'assets/images/default-avata.svg';
    }))

    fullName = this.profile$.pipe(map(res => {
        if(res) {
            const { firstName, lastName } = res.member
            return `${firstName} ${lastName}`
        }
        return 'LHC Trading';
    }))

    get isActivateAccount(): Observable<boolean> {
        return this.profile.pipe(map(res=> res?.statusAccount === "Y" ? true:false));
    }

    get statusKYC(): Observable<string|undefined> {
        return this.profile.pipe(map(res=> res?.statusKYC));
    }

    get statusBankAccount(): Observable<string|undefined> {
        return this.profile.pipe(map(res=> res?.statusBankAccount));
    }

    get level(): Observable<number> {
        return this.profile.pipe(map(res=> {
            if(res) {
                const { tradingLevel } = res.member;
                return tradingLevel;
            }
            return 0;
        }))
    }

    get eKycActionPage(): Observable<string> {
        return this.profile.pipe(map(res=> {
            if(res) {
                const { mobileKycActionPage } = res;
                // console.log('-----', mobileKycActionPage)
                return mobileKycActionPage;
            }
            return 'KycPage1';
        }))
    }
    constructor(private http: HttpService, private tokenService: TokenUserService) {
        console.log('profile service')
        this.getProfile();
    }
    
    private getProfile() {
        const next = (res: ProfileResponse) => {
            console.log('profile ----<>', res.data)
            if(res && res.status) {
                this.profile.next(res.data)
            }
        }

        this.http.get<ProfileResponse>(`${this.BASE_URI}FrontendMember/GetProfile`, this.tokenService.accessToken!).subscribe({ next });
        if((this.tokenService.accessToken && !this.tokenService.expiredToken)) {
        }

    }
}