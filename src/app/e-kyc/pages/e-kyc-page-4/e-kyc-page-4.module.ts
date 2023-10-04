import { NgModule } from '@angular/core';

import { EkycPage4RoutingModule } from './e-kyc-page-4-routing.module';
import { SharedModule } from '../../../shared/shared.module'
import { EkycPage4Component } from './e-kyc-page-4.component';


@NgModule({
  declarations: [
    EkycPage4Component
  ],
  imports: [
    SharedModule,
    EkycPage4RoutingModule
  ]
})
export class EkycPage4Module { }
