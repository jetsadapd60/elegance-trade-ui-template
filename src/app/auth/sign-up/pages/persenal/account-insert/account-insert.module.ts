import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInsertRoutingModule } from './account-insert-routing.module';
import { AccountInsertComponent } from './account-insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountInsertComponent
  ],
  imports: [
    CommonModule,
    AccountInsertRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountInsertModule { }
