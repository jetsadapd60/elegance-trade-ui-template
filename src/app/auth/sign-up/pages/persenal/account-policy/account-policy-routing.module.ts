import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPolicyComponent } from './account-policy.component';

const routes: Routes = [
  {path: '', component: AccountPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPolicyRoutingModule { }
