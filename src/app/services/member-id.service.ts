import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment.development";
import { BehaviorSubject } from "rxjs";
import { TokenUserService } from "./token-user.service";
import { MemberIdResponse } from "../models/member-id.model";

@Injectable()
export class MemberIdService {
    private readonly BASE_URI = environment.backend_api_uri;

    private memberId = new BehaviorSubject<string>('000000');

    memberId$ = this.memberId.asObservable();
    constructor(private http: HttpService, private tokenService: TokenUserService) {
        this.getMemberId();
    }

    get id() {
        return this.memberId.getValue();
    }

    private getMemberId() {
        if(!this.tokenService.accessToken || this.tokenService.expiredToken) return;

        const next = (res: MemberIdResponse) => {
            if(res && res.status) this.memberId.next(res.data.memberId);
        }
        this.http
            .get<MemberIdResponse>(`${this.BASE_URI}FrontendMember/GetMemberId`, this.tokenService.accessToken)
            .subscribe({ next });
    }
}