import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInsertRoutingModule } from './account-insert-routing.module';
import { AccountInsertComponent } from './account-insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneFormatPipe } from 'src/app/shared/pipes/phone-format.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AccountInsertComponent,
    PhoneFormatPipe
  ],
  imports: [
    SharedModule,
    AccountInsertRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AccountInsertModule { }
