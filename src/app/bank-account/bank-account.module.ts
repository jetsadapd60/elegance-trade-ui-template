import { NgModule } from '@angular/core';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankAccountComponent } from './bank-account.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BankAccountComponent
  ],
  imports: [
    SharedModule,
    BankAccountRoutingModule
  ]
})
export class BankAccountModule { }
