import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'trading-view',
  template: `
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
      <div id="tradingview_bac65"></div>
      <div class="tradingview-widget-copyright">
        <a
          href="https://th.tradingview.com/symbols/XAUTHB/?exchange=Ausiris"
          rel="noopener"
          target="_blank">
          <!-- <span class="blue-text">AAPL Chart</span> -->
        </a>
        <!-- by TradingView -->
      </div>
    </div>
    <!-- TradingView Widget END -->
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingViewComponent implements AfterViewInit {

  @Input('styleView') styleView: number = 3;

  constructor(private ref: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.init();
  }

  private init() {
    new TradingView.widget({

      // autosize: true,
      width: '100%',
      height: '100%',
      symbol: 'FXOPEN:XAUUSD',
      interval: '60',
      timezone: 'Asia/Bangkok',
      theme: 'light',
      style: this.styleView,
      locale: 'th_TH',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      hide_top_toolbar: true,
      allow_symbol_change: true,
      container_id: 'tradingview_bac65',
    });
  }

}
