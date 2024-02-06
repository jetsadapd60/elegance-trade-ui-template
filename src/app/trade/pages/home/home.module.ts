import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserMarketingPageComponent } from '../../components/user-marketing-page.component';
import { UserPageComponent } from '../../components/user-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserMarketingPageComponent,
    UserPageComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
