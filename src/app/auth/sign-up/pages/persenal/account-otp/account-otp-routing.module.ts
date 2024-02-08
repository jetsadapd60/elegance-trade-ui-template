import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountMobileOtpComponent } from './account-otp.component';

const routes: Routes = [
  {path: '', component: AccountMobileOtpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountMobileOtpRoutingModule { }
