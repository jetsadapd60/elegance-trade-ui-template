import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountConfirmPinComponent } from './account-confirm-pin.component';

const routes: Routes = [
  {path: '', component: AccountConfirmPinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountConfirmPinRoutingModule { }
