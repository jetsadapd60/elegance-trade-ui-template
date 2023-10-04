import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPolicyRoutingModule } from './account-policy-routing.module';
import { AccountPolicyComponent } from './account-policy.component';


@NgModule({
  declarations: [
    AccountPolicyComponent
  ],
  imports: [
    CommonModule,
    AccountPolicyRoutingModule
  ]
})
export class AccountPolicyModule { }
