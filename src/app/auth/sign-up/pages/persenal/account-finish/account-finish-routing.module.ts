import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountFinishComponent } from './account-finish.component';

const routes: Routes = [
  {path: '',component: AccountFinishComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountFinishRoutingModule { }
