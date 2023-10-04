import { NgModule } from '@angular/core';
import { TradRoutingModule } from './trad-routing.module';
import { TradComponent } from './trad.component';
import { SharedModule } from '../shared/shared.module';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TradComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TradRoutingModule,
    ConfirmDialogModule

  ]
})
export class TradModule { }
