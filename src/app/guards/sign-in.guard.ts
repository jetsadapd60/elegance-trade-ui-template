import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { TokenUserService } from "../services/token-user.service";

@Injectable()
export class SignInGuad {
    constructor(private tokenUserService: TokenUserService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        // console.log('token ---<>', this.tokenUserService.accessToken)
        // console.log('exp ---<>', this.tokenUserService.expiredToken)

        // console.log(state.url);

        // ถ้าไม่มี token คืนค่า false, นำทางไปหน้า sign-in
        // ถ้ามี token แต่หมดอายุ คืนค่า false, นำทางไปหน้า sign-in
        // ถ้ามี token และไม่หมดอายุ คืนค่า true
        if (this.tokenUserService.accessToken) {
            if(this.tokenUserService.expiredToken) {
                return true;
            } else {
                this.router.navigateByUrl('/');
                return false
            }
            
        } else {
            return true;
        }
        
    }
}