import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'switches',
  template: `
    <div class="swiches" style="width: 65px; height: 40px;">
      <div class="swiches__rail shadow bg-{{state?'warning':'white'}} border border-2 border-{{state?'0':'warning'}} rounded-pill position-relative">
        <div type="button" (click)="switches()" class="swiches__wheel position-absolute bg-{{state?'white':'warning'}} rounded-circle swiches__wheel--{{statusChecked}}"></div>
      </div>
    </div>
  `,
  styles: [
    `
      $radius: 40px;

      .swiches {
        &__rail {
          width: 100%;
          height: $radius;
          overflow: hidden;
          transition: all .3s;
        }

        &__wheel {
          width: calc($radius / 1.5);
          height: calc($radius / 1.5);
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all .3s;

          &--check {
            /* true */
            left: calc(100% - 30%); 
          }
          &--uncheck {
            /* false */
            left: calc(100% - 70%);
          }
        }
      }
    `
  ],

})
export class SwitchesComponent {

  private check = 'uncheck';
  state = false;
  @Output() onSwitches = new EventEmitter<boolean>();

  get statusChecked() {
    return this.check;
  }

  switches() {
    switch(this.check) {
      case 'uncheck': {
        this.check = 'check';
        this.state = true;
        this.onSwitches.emit(true);
        break;
      }
      default: {
        this.check = 'uncheck';
        this.state = false;
        this.onSwitches.emit(false);
        break;
      }
    };
  }

}
