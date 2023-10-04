import { NgModule               } from "@angular/core";
import { RouterModule, Routes   } from "@angular/router";
import { SignUpComponent        } from "./sign-up.component";

const routes: Routes = [
    { path: '', component: SignUpComponent,
        children: [
            { path: 'account',                          loadChildren: ()=>import('./pages/persenal/account/account.module')                         .then(m=>m.AccountModule) },
            
            // corporate
            { path: 'policy',               loadChildren: ()=>import('./pages/persenal/account-policy/account-policy.module')           .then(m=>m.AccountPolicyModule) },
            { path: 'insert',               loadChildren: ()=>import('./pages/persenal/account-insert/account-insert.module')           .then(m=>m.AccountInsertModule) },
            { path: 'mobile-otp',           loadChildren: ()=>import('./pages/persenal/account-otp/account-otp.module')   .then(m=>m.AccountMobileOtpModule) },
            { path: 'email-otp',            loadChildren: ()=>import('./pages/persenal/account-otp/account-otp.module')   .then(m=>m.AccountMobileOtpModule) },
            { path: 'policy-personal',      loadChildren: ()=>import('./pages/persenal/account-policy/account-policy.module')           .then(m=>m.AccountPolicyModule) },
            { path: 'insert-personal',      loadChildren: ()=>import('./pages/persenal/account-insert/account-insert.module')           .then(m=>m.AccountInsertModule) },
            { path: 'setup-pin',            loadChildren: ()=>import('./pages/persenal/account-setup-pin/account-setup-pin.module')     .then(m=>m.AccountSetupPinModule) },
            { path: 'confirm-pin',          loadChildren: ()=>import('./pages/persenal/account-setup-pin/account-setup-pin.module')     .then(m=>m.AccountSetupPinModule) },
            { path: 'finish',               loadChildren: ()=>import('./pages/persenal/account-finish/account-finish.module')           .then(m=>m.AccountFinishModule) },

        ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignUpRoutingModule {}