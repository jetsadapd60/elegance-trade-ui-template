import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MenuModel } from '../models/menu.medel';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-trad',
  template: `

  <app-modal></app-modal>
  <app-buy-sell-confirm></app-buy-sell-confirm>
  
  <!-- Header -->
  <app-trade-header></app-trade-header>


  <!-- menu -->
  <app-menu [menus]="menus" (onClick)="singOut()"></app-menu>


  <!-- Tab -->
  <app-tab></app-tab>


  <div class="container"> 
    <div class="card rounded-0 rounded-bottom-4 border-0 wrap-content shadow">
      <div class="card-body">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  </div>

  `,
  styles: [`
  
      :host {
        display: block;
        background: rgb(255,247,229);
        background: linear-gradient(0deg, rgba(255,247,229,1) 0%, rgba(248,224,172,1) 100%);
        width: 100%;
        height: 100%;
        overflow: scroll;
      }

      .card {
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
      }

      .wrap-content {
        background: #FCF3DE;
      }

  `],
  providers: [ConfirmationService, MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradComponent implements OnDestroy {

  
  private intervalId: any;

  constructor(
    private ref: ChangeDetectorRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    ) { }


  menus: MenuModel[] = [
    { id: '101', label: 'หน้าหลัก', icon: 'assets/images/icons-menu/home.svg', link: '/' },
    { id: '102', label: 'ซื้อ-ขาย', icon: 'assets/images/icons-menu/graph.svg', link: '/trade' },
    { id: '103', label: 'สินทรัพย์', icon: 'assets/images/icons-menu/pizza.svg', link: '/asset' },
    { id: '104', label: 'เคลียร์ริ่ง', icon: 'assets/images/icons-menu/wallet.svg', link: '/clearing' },
    { id: '105', label: 'ตั้งค่าบัญชี', icon: 'assets/images/icons-menu/setting.svg', link: '/setting' },
  ]


  singOut() {
    localStorage.clear();
    
  }


  confirm1() {
    this.confirmationService.confirm({
      icon: 'pi pi-cloud',
      accept: this.accept,
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }

  private accept() {
    console.log('ok')
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}