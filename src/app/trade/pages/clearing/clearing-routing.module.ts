import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearingComponent } from './clearing.component';

const routes: Routes = [
  { path: '', component: ClearingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClearingRoutingModule { }
