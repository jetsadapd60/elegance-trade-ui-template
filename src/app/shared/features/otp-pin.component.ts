import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base-class/base.component';

@Component({
  selector: 'app-otp-pin',
  template: `
   
          <div class="otp-input d-flex justify-content-evenly">
            <input type="text" #inputOtp class="rounded border text-center text-apple ff-kl border-wolf" pattern="\d" maxlength="1">
            <input type="text" #inputOtp class="rounded border text-center text-apple ff-kl border-wolf" pattern="\d" maxlength="1" disabled>
            <input type="text" #inputOtp class="rounded border text-center text-apple ff-kl border-wolf" pattern="\d" maxlength="1" disabled>
            <input type="text" #inputOtp class="rounded border text-center text-apple ff-kl border-wolf" pattern="\d" maxlength="1" disabled>
            <input type="text" #inputOtp class="rounded border text-center text-apple ff-kl border-wolf" pattern="\d" maxlength="1" disabled>
            <input type="text" #inputOtp class="rounded border text-center text-apple ff-kl border-wolf" pattern="\d" maxlength="1" disabled>
          </div>


    


  `,
  styles: [
    `
      /* Large devices (desktops, 992px and up) */
      @media (min-width: 992px) {
        .mobile-icon-wrap {
          padding-top: 47px;
        }

        .otp-wrap {
          padding-top: 30px;
        }

        .otp-input {
          height: 60px;
          width: 300px;

          input {
            height: 100%;
            width: 40px;
            font-size: 30px;
          }
        }

        .text-detail-wrap {
          padding-top: 39px;
        }

        .try-agin {
          font-size: 14px;
          padding-top: 11px;
        }

        .error-text {
          height: 49px;
          /* border: 1px solid red; */
        }
      }

      /* X-Large devices (large desktops, 1200px and up) */
      @media (min-width: 1200px) {
        .mobile-icon-wrap {
          padding-top: 67px;
        }

        .otp-wrap {
          padding-top: 50px;
        }

        .otp-input {
          height: 80px;
          width: 400px;

          input {
            height: 100%;
            width: 50px;
            font-size: 36px;
          }
        }

        .text-detail-wrap {
          padding-top: 39px;
        }

        .try-agin {
          font-size: 16px;
          padding-top: 11px;
        }

        .error-text {
          height: 49px;
          /* border: 1px solid red; */
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpAndPinComponent
  extends BaseComponent
  implements AfterViewInit, OnChanges
{
  @Output('onSubmit') onSubmit = new EventEmitter<string>();

  @ViewChildren('inputOtp') inputs!: QueryList<ElementRef>;

  @Input('isError') isError: boolean = false;

  constructor(override router: Router, override atr: ActivatedRoute) {
    super(router, atr);
  }

  ngAfterViewInit(): void {
    this.setupInput(this.inputs.toArray());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isError) this.errorStyle(this.inputs.toArray());
    console.log(changes);
  }

  private setupInput(inputs: ElementRef[]) {
    inputs[0].nativeElement.focus();
    inputs.forEach((item, currentIndex) => {
      let input = item.nativeElement;

      // Event Paste
      input.addEventListener('paste', (ev: any) => {
        const inputs = this.inputs.toArray();
        var clip = ev.clipboardData.getData('text').trim();
        if (!/^\d{6}$/.test(clip)) {
          ev.preventDefault();
          return;
        }

        var characters = clip.split('');
        inputs.forEach((otpInput, i) => {
          otpInput.nativeElement.value = characters[i] || '';
          this.enableNextBox(inputs[i], i);
          inputs[i].nativeElement.removeAttribute('disabled');
        });

        inputs[5].nativeElement.focus();
        // updateOTPValue(inputs);
        this.emitValue();
      });

      // เพิ่มตัวเลขในแต่ละช่อง
      input.addEventListener('input', (e: Event) => {
        console.log(e);
        let inputValue = input.value.trim();

        if (!/^\d$/.test(inputValue)) {
          console.log(!/^\d$/.test(inputValue));
          input.value = '';
          return;
        }

        if (inputValue && currentIndex < 5) {
          const inputs = this.inputs.toArray();
          inputs[currentIndex + 1].nativeElement.removeAttribute('disabled');
          inputs[currentIndex + 1].nativeElement.focus();
          // inputs[currentIndex].nativeElement.classList.remove("border-wolf");
          inputs[currentIndex].nativeElement.classList.add('border-warning');
        }

        if (inputValue && currentIndex === 5) {
          inputs[currentIndex].nativeElement.classList.add('border-warning');
          this.emitValue();
        }
        
      });

      // ลบตัวเลขในแต่ละช่อง
      input.addEventListener('keydown', (ev: any) => {
        const inputs = this.inputs.toArray();
        if (!input.value && ev.key === 'Backspace' && currentIndex > 0) {
          inputs[currentIndex - 1].nativeElement.focus();
          inputs[currentIndex].nativeElement.classList.remove('border-warning');

          if (currentIndex === 1) {
            inputs[0].nativeElement.classList.remove('border-warning');
          }
        }
      });
    });
  }

  private enableNextBox(input: any, currentIndex: number) {
    const inputValue = input.value;

    if (inputValue === '') {
      return;
    }

    const nextIndex = currentIndex + 1;
    const nextBox = this.inputs.toArray()[nextIndex];

    if (nextBox) {
      nextBox.nativeElement.removeAttribute('disabled');
    }
  }

  private emitValue() {
    const inputs = this.inputs.toArray();
    let otpValue = '';
    inputs.forEach((item) => {
      otpValue += item.nativeElement.value;
    });

    this.onSubmit.emit(otpValue);
  }

  private errorStyle(inputs: ElementRef[]) {
    inputs.forEach((input: ElementRef) => {
      input.nativeElement.classList.remove('border-warning');
      input.nativeElement.classList.add('border-red-hot-mama');
    });
  }
}
