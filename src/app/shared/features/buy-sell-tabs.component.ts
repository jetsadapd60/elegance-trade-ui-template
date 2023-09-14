import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { TabType } from 'src/app/models/tabs-type.model';



@Component({
  selector: 'buy-sell-tabs',
  template: `
        <div class="row mt-3 mt-xl-0" style="height: 48px">
          <div class="col-6 pe-0 py-0" (click)="onChangeTab(96)" type="button">
            <div class="card h-100 border-0 rounded-0 rounded-top-4 transition-tab" [ngClass]="{'bg-white': statusTab, 'bg-goldfish': !statusTab}">
              <div class="card-body pt-2 text-center py-0">
                <img src="assets/images/lhc-gold-tab-{{statusTab?'active':'unactive'}}.svg" alt="" style="width: 32px;" alt="">
                <span class="fz-20 ff-mm text-mist transition-tab" [ngClass]="{'text-mist': statusTab, 'text-white': !statusTab}">96.50 %</span>
              </div>
            </div>
          </div>
          <div class="col-6 ps-0 py-0" (click)="onChangeTab(99)" type="button">
            <div class="card h-100 border-0 rounded-0 rounded-top-4 transition-tab" [ngClass]="{'bg-goldfish': statusTab, 'bg-white': !statusTab}">
              <div class="card-body pt-2 text-center py-0">
                <img src="assets/images/lhc-gold-tab-{{!statusTab?'active':'unactive'}}.svg" style="width: 32px;" alt="">
                <span class="fz-20 ff-mm text-white transition-tab" [ngClass]="{'text-white': statusTab, 'text-mist': !statusTab}">99.99 %</span>
              </div>
            </div>
          </div>
        </div>
  `,
  styles: [
    `
      .transition-tab {
        transition: all .3s;
      }

      .active {
        color: red;
      }

      .unActive {
        color: blue
      }
    `
  ]
})
export class BuySellTabsComponent implements AfterViewInit {
  
  @Output('changeTab') changeTab = new EventEmitter<number>();

  /**
   * TabType only value 96 or 99
   */
  @Input('defaultTab') defaultTab: TabType = 96; 

  ngAfterViewInit(): void {
    this.changeTab.emit(this.defaultTab);
  }


  tabType: TabType = 96;

  onChangeTab(value: number) {
    this.tabType = value as TabType;
    this.changeTab.emit(this.tabType);
  }

  get statusTab(): boolean {
    if(this.tabType < 99) {
      return true;
    } else {
      return false;
    }
  }

}
