import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradRoutingModule } from './trad-routing.module';
import { TradComponent } from './trad.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TradComponent
  ],
  imports: [
    SharedModule,
    TradRoutingModule,

  ]
})
export class TradModule { }
