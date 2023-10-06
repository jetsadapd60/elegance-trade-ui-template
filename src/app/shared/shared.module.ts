import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './features/footer.component';
import { TradingViewComponent } from './features/trading-view.component';
import { DotStatusDirective } from './directives/dot-status.directive';

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
import { OtpAndPinComponent } from './features/otp-pin.component';
import { SwitchesComponent } from './features/switches.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { BuySellConfirmComponent } from './features/buy-sell-confirm.component';
import { HeaderComponent } from './features/header.component';
import { FootterComponent } from './features/footter.component';
import { ModalComponent } from './features/modal.component';
import { ButtonComponent } from './features/button.component';

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
    AvatarModule,
    ConfirmDialogModule,
    ToastModule
  ],
  declarations: [
    FooterComponent,
    TradingViewComponent,
    DotStatusDirective,
    ChartComponent,
    ClearingTableComponent,
    OtpAndPinComponent,
    SwitchesComponent,
    BuySellConfirmComponent,
    HeaderComponent,
    FootterComponent,
    ModalComponent,
    ButtonComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent,
    TradingViewComponent,
    ChartComponent,
    ClearingTableComponent,
    AvatarModule,
    OtpAndPinComponent,
    SwitchesComponent,
    TableModule,
    InputNumberModule,
    DotStatusDirective,
    BuySellConfirmComponent,
    HeaderComponent,
    FootterComponent,
    ModalComponent,
    ButtonComponent
  ],
})
export class SharedModule {}
