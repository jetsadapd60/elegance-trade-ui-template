import { Injectable } from "@angular/core";
import { TokenUserService } from "./token-user.service";
import { TokenMarketingService } from "./token-marketing.service";

@Injectable({ providedIn: 'root' })
export class StatusLoggedInService {

    constructor(
        private tokenUserService: TokenUserService,
        private tokenMarketingService: TokenMarketingService) { }

    /**
     * ล็อคอินด้วย USER
     */
    get isUserLoggedIn(): boolean {
        return !this.tokenUserService.expiredToken;
    }

    /**
     * ล็อคอินด้วย MARKETING
     */
    get isPureMarketingLoggedIn(): boolean {
        return !this.tokenMarketingService.expiredToken;
    }

    /**
     * ล็อคอินด้วย MARKETING && USER
     */
    get isMarketingLoggedInOnUser(): boolean {
        return this.isUserLoggedIn && this.isPureMarketingLoggedIn;
    }
}