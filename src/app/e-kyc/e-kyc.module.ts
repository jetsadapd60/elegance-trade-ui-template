import { NgModule           } from '@angular/core';

import { EKycRoutingModule  } from './e-kyc-routing.module';
import { SharedModule       } from '../shared/shared.module';
import { EKycComponent      } from './e-kyc.component';


@NgModule({
  declarations: [EKycComponent],
  imports: [
    SharedModule,
    EKycRoutingModule,
    
  ]
})
export class EKycModule { }
