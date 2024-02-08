import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EkycPage4Component } from './e-kyc-page-4.component';

const routes: Routes = [
  { path: '', component: EkycPage4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EkycPage4RoutingModule { }
