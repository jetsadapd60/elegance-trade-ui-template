import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EKycComponent } from './e-kyc.component';

const routes: Routes = [
  { path: '', component: EKycComponent,
    children: [
      {path: 'KycPage1', loadChildren: ()=>import('./pages/e-kyc-page-1/e-kyc-page-1.module').then(m=>m.EkycPage1Module)},
      {path: 'KycPage2', loadChildren: ()=>import('./pages/e-kyc-page-2/e-kyc-page-2.module').then(m=>m.EkycPage2Module)},
      {path: 'KycPage3', loadChildren: ()=>import('./pages/e-kyc-page-3/e-kyc-page-3.module').then(m=>m.EkycPage3Module)},
      {path: 'KycPage4', loadChildren: ()=>import('./pages/e-kyc-page-4/e-kyc-page-4.module').then(m=>m.EkycPage4Module)},
      {path: 'KycPage5', loadChildren: ()=>import('./pages/e-kyc-page-5/e-kyc-page-5.module').then(m=>m.EkycPage5Module)},
      {path: 'KycPage6', loadChildren: ()=>import('./pages/e-kyc-page-6/e-kyc-page-6.module').then(m=>m.EkycPage6Module)},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EKycRoutingModule { }
