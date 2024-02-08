import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccount1RoutingModule } from './bank-account-1-routing.module';
import { BankAccount1Component } from './bank-account-1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BankAccount1Component
  ],
  imports: [
    CommonModule,
    BankAccount1RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BankAccount1Module { }
