import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EkycPage2Component } from './e-kyc-page-2.component';

const routes: Routes = [
  { path: '', component: EkycPage2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EkycPage2RoutingModule { }
