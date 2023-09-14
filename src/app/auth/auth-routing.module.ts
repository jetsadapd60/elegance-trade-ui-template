import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCommponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthCommponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./sign-in/sign-in.module').then((m) => m.SignInModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
