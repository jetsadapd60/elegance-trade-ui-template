import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './features/footer.component';
import { TradingViewComponent } from './features/trading-view.component';
import { SwitchesComponent } from './features/switches.component';
import { BuySellTabsComponent } from './features/buy-sell-tabs.component';
import { BuySellFormComponent } from './features/buy-sell-form.component';
import { DotStatusDirective } from './directives/dot-status.directive';
import { BuySellTableComponent } from './features/buy-sell-table.component';

import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './features/chart.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ClearingTableComponent } from './features/clearing-table.component';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
    DropdownModule,
    PasswordModule,
    TableModule,
    ChartModule,
    RadioButtonModule,
    InputNumberModule,
    AvatarModule
  ],
  declarations: [
    FooterComponent,
    TradingViewComponent,
    SwitchesComponent,
    BuySellTabsComponent,
    BuySellFormComponent,
    DotStatusDirective,
    BuySellTableComponent,
    ChartComponent,
    ClearingTableComponent
  ],
  exports: [
    CommonModule,
    FooterComponent,
    TradingViewComponent,
    SwitchesComponent,
    BuySellTabsComponent,
    BuySellFormComponent,
    BuySellTableComponent,
    ChartComponent,
    ClearingTableComponent,
    AvatarModule
  ],
})
export class SharedModule {}
