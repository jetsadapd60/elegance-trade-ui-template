import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearingRoutingModule } from './clearing-routing.module';
import { ClearingComponent } from './clearing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ClearingComponent
  ],
  imports: [
    SharedModule,
    ClearingRoutingModule
  ]
})
export class ClearingModule { }
