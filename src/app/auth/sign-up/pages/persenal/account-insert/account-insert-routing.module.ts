import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInsertComponent } from './account-insert.component';

const routes: Routes = [
  {path: '', component: AccountInsertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountInsertRoutingModule { }
