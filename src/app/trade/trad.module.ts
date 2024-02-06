import { NgModule } from '@angular/core';
import { TradRoutingModule } from './trad-routing.module';
import { TradComponent } from './trad.component';
import { SharedModule } from '../shared/shared.module';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';
import { BuySellConfirmService } from '../services/buy-sell-confirm.service';
import { MenuComponent } from './components/menu.component';
import { TradeHeaderComponent } from './components/head.component';
import { TabComponent } from './components/tab.component';
import { ProfileService } from '../services/profile.service';
import { MemberIdService } from '../services/member-id.service';
import { ConfigService } from '../services/config.service';
import { NotiSettingService } from '../services/noti-setting.service';

@NgModule({
  declarations: [
    TradComponent,
    MenuComponent,
    TradeHeaderComponent,
    TabComponent,
  ],
  imports: [CommonModule, SharedModule, TradRoutingModule, ConfirmDialogModule],
  providers: [BuySellConfirmService, ProfileService, MemberIdService, ConfigService, NotiSettingService],
})
export class TradModule {}
