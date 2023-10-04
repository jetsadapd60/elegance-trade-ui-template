import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EkycPage5Component } from './e-kyc-page-5.component';

const routes: Routes = [
  { path: '', component: EkycPage5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EkycPage5RoutingModule { }
