import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountFinishRoutingModule } from './account-finish-routing.module';
import { AccountFinishComponent } from './account-finish.component';


@NgModule({
  declarations: [
    AccountFinishComponent
  ],
  imports: [
    CommonModule,
    AccountFinishRoutingModule
  ]
})
export class AccountFinishModule { }
