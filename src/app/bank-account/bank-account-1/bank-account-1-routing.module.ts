import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccount1Component } from './bank-account-1.component';

const routes: Routes = [
  { path: '', component: BankAccount1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccount1RoutingModule { }
