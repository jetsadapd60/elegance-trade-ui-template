import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountComponent } from './bank-account.component';

const routes: Routes = [
  { path: '', component: BankAccountComponent,
    children: [
      { path: '', loadChildren: ()=>import('./bank-account-1/bank-account-1.module').then(m=>m.BankAccount1Module)},
      { path: '2', loadChildren: ()=>import('./bank-account-2/bank-account-2.module').then(m=>m.BankAccount2Module)}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountRoutingModule { }
