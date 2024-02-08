import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuySellComponent } from './buy-sell.component';

const routes: Routes = [
  { path: '', component: BuySellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuySellRoutingModule { }
