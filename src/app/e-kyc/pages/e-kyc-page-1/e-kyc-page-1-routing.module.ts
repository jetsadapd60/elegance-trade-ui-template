import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EkycPage1Component } from './e-kyc-page-1.component';

const routes: Routes = [
  { path: '', component: EkycPage1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EkycPage1RoutingModule { }
