import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EkycPage3Component } from './e-kyc-page-3.component';

const routes: Routes = [
  { path: '', component: EkycPage3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EkycPage3RoutingModule { }
