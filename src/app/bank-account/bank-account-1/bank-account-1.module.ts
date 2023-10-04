import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccount1RoutingModule } from './bank-account-1-routing.module';
import { BankAccount1Component } from './bank-account-1.component';


@NgModule({
  declarations: [
    BankAccount1Component
  ],
  imports: [
    CommonModule,
    BankAccount1RoutingModule
  ]
})
export class BankAccount1Module { }
