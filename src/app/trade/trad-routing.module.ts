import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradComponent } from './trad.component';

const routes: Routes = [
  {
    path: '',
    component: TradComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'trade',
        loadChildren: () =>
          import('./pages/buy-sell/buy-sell.module').then((m) => m.BuySellModule),
      },
      {
        path: 'asset',
        loadChildren: () =>
          import('./pages/asset/asset.module').then((m) => m.AssetModule),
      },
      {
        path: 'clearing',
        loadChildren: () =>
          import('./pages/clearing/clearing.module').then((m) => m.ClearingModule),
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./pages/setting/setting.module').then((m) => m.SettingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradRoutingModule {}
