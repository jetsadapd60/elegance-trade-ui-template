import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base-class/base.component';
import { PersonType } from 'src/app/models/enum';

@Component({
  selector: 'app-account-insert',
  template: `
    

      <h3 class="head-text ff-kr text-apple py-lg-4 py-md-3">สร้างบัญชีบุคคลธรรมดา</h3>
      <div class="row ">
        <div class="col-10 offset-1 col-xl-8 offset-xl-1 p-0 s">
          <form class="form" [formGroup]="formGroup" (ngSubmit)="submitForm($event)">

          <!-- สำหรับ Personal -->
            <ng-container *ngIf="page === 'personal'; else corporate">
              <div class="form-group ">
                <label for="" class="text-mauve ff-kl">อีเมล</label>
                <input formControlName="email" type="email" class="form-control w-100">
              </div>
              <div class="form-group pt-4">
                <div class="d-flex justify-content-between align-items-center">
                  <label for="" class="text-mauve ff-kl">รหัสผ่าน</label>
                  <p class="mb-0 text-orange ff-kl">การตั้งรหัสผ่าน <i class="bi bi-info-circle"></i></p>
                </div>
                <div class="wrap-password">
                  <input formControlName="password" type="{{isShowPassword?'text':'password'}}" class="form-control w-100">
                  <i class="bi eye bi-eye{{isShowPassword?'':'-slash'}}" type="button" (click)="isShowPassword = !isShowPassword"></i>
                </div>
              </div>
              <div class="form-group pt-4">
                <div class="d-flex justify-content-between align-items-center">
                  <label for="" class="text-mauve ff-kl">ยืนยันรหัสผ่าน</label>
                  <!-- <p class="mb-0 text-orange ff-kl">การตั้งรหัสผ่าน <i class="bi bi-info-circle"></i></p> -->
                </div>
                <div class="wrap-password">
                  <input formControlName="confirmPassword" type="{{isShowPassword?'text':'password'}}" class="form-control">
                  <i class="bi eye bi-eye{{isShowPassword?'':'-slash'}}" type="button" (click)="isShowPassword = !isShowPassword"></i>
                </div>
              </div>
            </ng-container>


            <!-- สำหรับ Corporate -->
            <ng-template #corporate>  

              <div class="form-group ">
                <label for="shop-name" class="text-mauve ff-kl">ชื่อบริษัท-ชื่อร้าน</label>
                <input formControlName="shopName" type="text" id="shop-name" class="form-control">
              </div>

              <div class="form-group pt-4 d-flex flex-column">
                <label for="shop-name" class="text-mauve ff-kl">ประเภทกิจการ</label>
                <select name="" id="" formControlName="businessType" class="form-control px-3  text-mauve">
                  <option id="" value="">-- เลือก --</option>
                  <option id="" value="">1</option>
                  <option id="" value="">2</option>
                  <option id="" value="">3</option>
                </select>
              </div>

              <div class="form-group pt-4">
                <label for="contact-name" class="text-mauve ff-kl">ชื่อผู้ติดต่อ</label>
                <input formControlName="contactName" type="text" id="contact-name" class="form-control">
              </div>

            </ng-template>


            <div class="form-group pt-4">
                <div class="form-group ">
                  <label for="" class="text-mauve ff-kl">เบอร์โทรศัพท์</label>
                  <input formControlName="phoneNumber" type="text" class="form-control">
                </div>
              </div>
              <div class="form-group pt-4">
                <div class="form-group text-center">
                  <button type="submit" class="btn btn-apple ff-kl" >ถัดไป</button>
                </div>
              </div>


          </form>
        </div>
      </div>



  `,
  styles: [`

    .wrap-password {
      position: relative;

      .eye {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
      }
    }

    
       /* Large devices (desktops, 992px and up) */
      @media (min-width: 992px) { 
        input, select {
          height: 47px;
        }

        label, label + p {
          font-size: 14px;
        }
        .btn-apple {
          width: 120px;
          font-size: 18px;
        }
        .head-text {
          font-size: 20px;
        }
       }

       /* X-Large devices (large desktops, 1200px and up) */
      @media (min-width: 1200px) { 
        form {
          width: 100%;
        }

        input, select {
          width: 100%;
          height: 54px;
        }

        label, label + p {
          font-size: 16px;
        }

        .btn-apple {
          width: 170px;
          font-size: 20px;
        }
        .head-text {
          font-size: 24px;
        }

       }
  
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountInsertComponent extends BaseComponent implements OnInit {

  formGroup!: FormGroup;
  isShowPassword = false;

  constructor(override router:Router,  override atr: ActivatedRoute, private fbd: FormBuilder) {
    super(router, atr);
  }

  ngOnInit(): void {
    if(this.page === PersonType.PERSONAL) this.builderPersonalForm();
    if(this.page === PersonType.CORPORATE) this.builderCorporateForm();
  }

  submitForm(e: Event) {
    if(this.page === PersonType.PERSONAL) 
      this.navigation('mobile-otp', this.page); 
    if(this.page === PersonType.CORPORATE) 
      this.navigation('mobile-otp', this.page); 
    return e;
  }

  private builderPersonalForm() {
    this.formGroup = this.fbd.group({
      email           : [''],
      password        : [''],
      confirmPassword : [''],
      phoneNumber     : [''],
    });
  }

  private builderCorporateForm() {
    this.formGroup = this.fbd.group({
      shopName: [''],
      businessType: [''],
      contactName: [''],
      phoneNumber: [''],
    });
  }
}
