import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EkycPage3RoutingModule } from './e-kyc-page-3-routing.module';
import { WebcamModule } from 'ngx-webcam';
import { EkycPage3Component } from './e-kyc-page-3.component';


@NgModule({
  declarations: [EkycPage3Component],
  imports: [
    CommonModule,
    EkycPage3RoutingModule,
    WebcamModule
  ]
})
export class EkycPage3Module { }
