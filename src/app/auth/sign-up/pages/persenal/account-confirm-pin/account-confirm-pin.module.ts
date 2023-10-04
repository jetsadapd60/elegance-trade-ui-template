import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountConfirmPinRoutingModule } from './account-confirm-pin-routing.module';
import { AccountConfirmPinComponent } from './account-confirm-pin.component';


@NgModule({
  declarations: [
    AccountConfirmPinComponent
  ],
  imports: [
    CommonModule,
    AccountConfirmPinRoutingModule
  ]
})
export class AccountConfirmPinModule { }
