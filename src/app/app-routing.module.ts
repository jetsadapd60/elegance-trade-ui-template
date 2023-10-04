import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./trade/trad.module').then(m=>m.TradModule) },
  { path: 'auth', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule) },
  { path: 'e-kyc', loadChildren: ()=>import('./e-kyc/e-kyc.module').then(m=>m.EKycModule) },
  { path: 'bank-account', loadChildren: ()=>import('./bank-account/bank-account.module').then(m=>m.BankAccountModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
