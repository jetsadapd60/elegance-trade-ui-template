import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { BuySellConfirmService } from 'src/app/services/buy-sell-confirm.service';

@Component({
  selector: 'app-buy-sell',
  template: `



  <div class="row">
    <div id class="col-xl-8">
      <div #top class="card rounded-0 rounded-top-4 border-0" style="min-height: 80px;">
        <div class="card-body py-1">
          <div class="row pt-1 ">
            <div class="col-md-4 border-0 border-end">
              <span class="text-chianti">วงเงินขายคงเหลือ</span>
              <p class="text-end text-lake mb-0 ff-mm fz-26">3,000 Bg</p>
            </div>
            <div class="col-md-4 border-0 border-end">
              <span class="text-chianti">วงเงินซื้อคงเหลือ</span>
              <p class="text-end text-homeworld mb-0 ff-mm fz-26">3,000 Bg</p>
            </div>
            <div class="col-md-4 border-0  border-0">
              <span class="text-chianti">ทองฝาก</span>
              <p class="text-end text-nacho mb-0 ff-mm fz-26">3,000 Bg</p>
            </div>
            <!-- <div class="col-md-3 border-0">
              <span class="text-chianti">รอชำระ/ส่งมอบ</span>
              <p class="text-center text-blossom mb-0 ff-mm fz-26">15/30 Bg</p>
            </div> -->
          </div>
        </div>
      </div>

      <div #top class="card py-3 bg-transparent border-0 routnded-0 d-none d-xl-block">
        <div class="card-body py-0">
          <div class="row" style="min-height: 44px;">
            <div class="col-9 ps-0 py-0">
              <div class="align-items-center bg-warning d-flex h-100 justify-content-between px-3 rounded-pill">
                <p class="mb-0 text-mist ff-mm fz-16">Margin: 5,850,000 <span class="ff-kr">บาท</span></p>
                <!-- <p class="mb-0 text-mist ff-mm fz-16">Maintenance Margin: 0 <span class="ff-kr">บาท</span></p> -->
                <p class="mb-0 text-mist ff-mm fz-16">Maintenance Margin: 0 <span class="ff-kr">บาท</span></p>
              </div>
            </div>
            <div class="col-3 py-0">
              <div class="row">
                <div class="col-6 d-flex gap-3 py-0">
                  <img src="assets/images/icons-menu/graph-gray.svg" alt="">
                  <div>
                    <p class="mb-0 text-haze fz-14">View</p>
                    <p class="mb-0 text-haze fz-14">Chart</p>
                  </div>
                </div>
                <div class="col-6 ps-0 py-0">
                  <switches (onSwitches)="onSwitches($event)"></switches>
                </div>
              </div>
                
            </div>
          </div>
        </div>
      </div>

      <div #top class="card border-0 rounded-0 rounded-bottom-4 mt-3 mt-xl-0" style="height: 100%;">
        <div class="card-body" [ngClass]="{'p-0': !showTradeView}">
          <trading-view [styleView]="1" *ngIf="showTradeView; else viewTable"></trading-view>
        </div>
          <ng-template #viewTable>
            <app-buy-sell-table></app-buy-sell-table>
          </ng-template>
        </div>
      </div>

      <div class="col-xl-4 mt-3 mt-xl-0">
        <buy-sell-tabs [defaultTab]="96" (changeTab)="onChangeTab($event)"></buy-sell-tabs>
        <app-buy-sell-form></app-buy-sell-form>
      </div>
    </div>

    <ng-container *ngIf="showTradeView" >
      <app-buy-sell-table [showTradeView]="showTradeView" class=""></app-buy-sell-table>
    </ng-container>
  `,
  styles: [
    `
      .d {
        /* height: calc(100%-20px); */
      }
    `
  ],
  providers: []
})
export class BuySellComponent implements AfterViewInit {

  @ViewChildren('top') top!: QueryList<ElementRef>;

  showTradeView = true;

  constructor(public buySellConfirmService: BuySellConfirmService) {}


  /**
   * รับค่าจากการเปลี่ยน Tabs
   * @param e number 96 or 99
   */
  onSwitches(e: boolean) {
    this.showTradeView = !e;

    console.log(e)
  }

  onChangeTab(e: number) {
    console.log(e)
  }

  ngAfterViewInit(): void {

    this.cutstomElHeight();
    
    window.onresize = () => {
      this.cutstomElHeight();
    }


 

  }

  private cutstomElHeight() {
    const el = this.top.toArray();
      let totoloffsetHeightEl = 0;
  
      el.forEach((item: ElementRef, index: number) => {
        if(index == 2) return;
        totoloffsetHeightEl += item.nativeElement.offsetHeight;
      })
  
      const offsetHeightEl3 = el[2].nativeElement.offsetHeight;
  
  
      // calc(100%-20px);
      el[2].nativeElement.style.height = `calc(100% - ${totoloffsetHeightEl}px)`;
  
      // console.log(el[2].nativeElement.offsetHeight)
  }

}
