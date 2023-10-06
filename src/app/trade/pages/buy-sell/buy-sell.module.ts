import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuySellRoutingModule } from './buy-sell-routing.module';
import { BuySellComponent } from './buy-sell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BuySellTableComponent } from './buy-sell-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuySellTabsComponent } from './buy-sell-tabs.component';
import { BuySellFormComponent } from './buy-sell-form.component';
import { OrderStatePipe } from 'src/app/shared/pipes/order-state.pipe';


@NgModule({
  declarations: [
    BuySellComponent,
    BuySellTableComponent,
    BuySellTabsComponent,
    BuySellFormComponent,
    OrderStatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BuySellRoutingModule,
  ]
})
export class BuySellModule { }
