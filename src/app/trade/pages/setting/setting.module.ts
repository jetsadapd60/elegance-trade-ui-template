import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { AboutUsComponent } from './pages/about-us.component';
import { AccountSettingComponent } from './pages/account-setting.component';
import { ContactUsComponent } from './pages/contact-us.component';
import { ManagePasswordComponent } from './pages/manage-password.component';
import { ManagePinComponent } from './pages/manage-pin.component';
import { NotificationComponent } from './pages/notification.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    SettingComponent,
    AboutUsComponent,
    AccountSettingComponent,
    ContactUsComponent,
    ManagePasswordComponent,
    ManagePinComponent,
    NotificationComponent
  ],
  imports: [
    SharedModule,
    SettingRoutingModule,
  ]
})
export class SettingModule { }
