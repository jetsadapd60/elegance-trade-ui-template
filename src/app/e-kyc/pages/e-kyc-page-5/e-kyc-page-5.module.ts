import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EkycPage5RoutingModule } from './e-kyc-page-5-routing.module';
import { WebcamModule } from 'ngx-webcam';
import { EkycPage5Component } from './e-kyc-page-5.component';

@NgModule({
  declarations: [EkycPage5Component],
  imports: [
    CommonModule,
    EkycPage5RoutingModule,
    WebcamModule
  ]
})
export class EkycPage5Module { }
