import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccount2Component } from './bank-account-2.component';

const routes: Routes = [
  { path: '', component: BankAccount2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccount2RoutingModule { }
