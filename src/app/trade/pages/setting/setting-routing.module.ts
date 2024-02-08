import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
import { AccountSettingComponent } from './pages/account-setting.component';
import { ManagePasswordComponent } from './pages/manage-password.component';
import { ManagePinComponent } from './pages/manage-pin.component';
import { NotificationComponent } from './pages/notification.component';
import { AboutUsComponent } from './pages/about-us.component';
import { ContactUsComponent } from './pages/contact-us.component';

const routes: Routes = [
  { path: '', component: SettingComponent,
    children: [
      { path: '', component: AccountSettingComponent },
      { path: 'manage-password', component: ManagePasswordComponent },
      { path: 'manage-pin', component: ManagePinComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
