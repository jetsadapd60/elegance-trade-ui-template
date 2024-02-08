import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSetupPinComponent } from './account-setup-pin.component';

const routes: Routes = [
  {path:'', component: AccountSetupPinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSetupPinRoutingModule { }
