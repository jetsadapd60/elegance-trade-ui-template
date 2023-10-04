import { NgModule } from '@angular/core';

import { AccountMobileOtpRoutingModule } from './account-otp-routing.module';
import { AccountMobileOtpComponent } from './account-otp.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AccountMobileOtpComponent
  ],
  imports: [
    SharedModule,
    AccountMobileOtpRoutingModule
  ]
})
export class AccountMobileOtpModule { }
