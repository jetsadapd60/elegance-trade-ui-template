import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EkycPage6Component } from './e-kyc-page-6.component';

const routes: Routes = [
  { path: '', component: EkycPage6Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EkycPage6RoutingModule { }
