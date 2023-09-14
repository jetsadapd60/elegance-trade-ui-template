import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuySellRoutingModule } from './buy-sell-routing.module';
import { BuySellComponent } from './buy-sell.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BuySellComponent
  ],
  imports: [
    SharedModule,
    BuySellRoutingModule
  ]
})
export class BuySellModule { }
