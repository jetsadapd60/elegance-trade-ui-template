import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { StatusLoggedInService } from "../services/status-logged-in.service";

@Injectable()
export class AuthenticationGuad {

    // private isLoggedInUser: boolean;
    // private isLoggedInMarketgin: boolean;

    constructor(
        private statusLoggedInService: StatusLoggedInService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        // console.log('token ---<>', this.tokenUserService.accessToken)
        // console.log('exp ---<>', this.tokenUserService.expiredToken)

        // console.log(state.url);

        // ถ้าไม่มี token คืนค่า false, นำทางไปหน้า sign-in
        // ถ้ามี token แต่หมดอายุ คืนค่า false, นำทางไปหน้า sign-in
        // ถ้ามี token และไม่หมดอายุ คืนค่า true
        // if (this.tokenUserService.expiredToken || this.tokenMarketingService.expiredToken) {
        //     if (this.tokenUserService.expiredToken) {
        //         this.gotoSignInPage();
        //         return false
        //     } else {
        //         return true;
        //     }

        // } else {
        //     this.gotoSignInPage();
        //     return false
        // }

        if (this.statusLoggedInService.isUserLoggedIn || this.statusLoggedInService.isPureMarketingLoggedIn) {
            return true;
        }

        this.gotoSignInPage();
        return false;
    }

    private gotoSignInPage() {
        this.router.navigateByUrl('/auth/sign-in');
    }
}