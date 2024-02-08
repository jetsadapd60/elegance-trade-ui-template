import { NgModule } from '@angular/core';

import { AccountSetupPinRoutingModule } from './account-setup-pin-routing.module';
import { AccountSetupPinComponent } from './account-setup-pin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AccountSetupPinComponent
  ],
  imports: [
    SharedModule,
    AccountSetupPinRoutingModule
  ]
})
export class AccountSetupPinModule { }
