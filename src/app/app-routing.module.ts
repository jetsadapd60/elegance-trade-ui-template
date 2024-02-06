import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuad } from './guards/authentication.guard';
import { SignInGuad } from './guards/sign-in.guard';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./trade/trad.module').then(m=>m.TradModule), canActivate: [AuthenticationGuad] },
  { path: 'auth', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule), canActivate: [SignInGuad] },
  { path: 'e-kyc', loadChildren: ()=>import('./e-kyc/e-kyc.module').then(m=>m.EKycModule) },
  { path: 'bank-account', loadChildren: ()=>import('./bank-account/bank-account.module').then(m=>m.BankAccountModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
