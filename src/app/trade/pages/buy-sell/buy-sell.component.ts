import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-buy-sell',
  template: `
    <div class="row" *ngIf="1">
      <div id class="col-xl-8">
        <div #top class="card rounded-0 rounded-top-4 border-0" style="min-height: 80px;">
          <div class="card-body py-1">
            <div class="row pt-1">
              <div class="col-md-3 border-0 border-end">
                <span class="text-chianti">วงเงินขาย</span>
                <p class="text-center text-lake mb-0 ff-mm fz-26">3,000 Bg</p>
              </div>
              <div class="col-md-3 border-0 border-end">
                <span class="text-chianti">วงเงินซื้อ</span>
                <p class="text-center text-homeworld mb-0 ff-mm fz-26">3,000 Bg</p>
              </div>
              <div class="col-md-3 border-0 border-end">
                <span class="text-chianti">ทองฝาก</span>
                <p class="text-center text-nacho mb-0 ff-mm fz-26">3,000 Bg</p>
              </div>
              <div class="col-md-3 border-0">
                <span class="text-chianti">รอชำระ/ส่งมอบ</span>
                <p class="text-center text-blossom mb-0 ff-mm fz-26">15/30 Bg</p>
              </div>
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
          <buy-sell-table></buy-sell-table>
        </ng-template>
        </div>
      </div>

      <div class="col-xl-4 mt-3 mt-xl-0">
        <buy-sell-tabs [defaultTab]="96" (changeTab)="onChangeTab($event)"></buy-sell-tabs>
        <buy-sell-form></buy-sell-form>
      </div>
    </div>

    <ng-container *ngIf="showTradeView" >
      <buy-sell-table [showTradeView]="showTradeView" class=""></buy-sell-table>
    </ng-container>
  `,
  styles: [
    `
      .d {
        /* height: calc(100%-20px); */
      }
    `
  ]
})
export class BuySellComponent implements AfterViewInit {

  @ViewChildren('top') top!: QueryList<ElementRef>;

  showTradeView = true;


  /**
   * รับค่าจากการเปลี่ยน Tabs
   * @param e number 96 or 99
   */
  onSwitches(e: boolean) {
    this.showTradeView = e;
  }

  onChangeTab(e: any) {
    // console.log(e)
  }

  ngAfterViewInit(): void {

    this.cutstomElHeight();
    
    window.onresize = () => {
      this.cutstomElHeight();
    }


 

  }

  private cutstomElHeight() {
    let el = this.top.toArray();
      let totoloffsetHeightEl = 0;
  
      el.forEach((item: ElementRef, index: number) => {
        if(index == 2) return;
        totoloffsetHeightEl += item.nativeElement.offsetHeight;
      })
  
      let offsetHeightEl3 = el[2].nativeElement.offsetHeight;
  
  
      // calc(100%-20px);
      el[2].nativeElement.style.height = `calc(100% - ${totoloffsetHeightEl}px)`;
  
      // console.log(el[2].nativeElement.offsetHeight)
  }

}
