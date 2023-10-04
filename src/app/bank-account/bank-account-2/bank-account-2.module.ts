import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccount2RoutingModule } from './bank-account-2-routing.module';
import { BankAccount2Component } from './bank-account-2.component';


@NgModule({
  declarations: [
    BankAccount2Component
  ],
  imports: [
    CommonModule,
    BankAccount2RoutingModule
  ]
})
export class BankAccount2Module { }
