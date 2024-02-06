import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base-class/base.component';
import { CustomerStorageType, UserStorage } from 'src/app/models/enum';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-account-finish',
  template: `
    
    <div class="finish">

        <div>
            <img src="assets/images/complete-sign-up-icon.svg" alt="" class="pr-3">
            <!-- <h3>การสร้างบัญชีขั้นต้นสำเร็จ</h3> -->
            <img src="assets/images/text-finish-page-icon.png" alt="">
        </div>

        <div class="pt-3">
          <p class="text-warning m-0 ff-kr" *ngIf="isPersonal">เพื่อให้การเปิดบัญชี ซื้อ-ขาย เสร็จสมบูรณ์กรุณาล็อกอินเข้าสู่ระบบ เพื่อดำเนินการ</p>
          <p class="text-warning m-0 ff-kr" *ngIf="!isPersonal">เพื่อให้การเปิดบัญชี ซื้อ-ขาย เสร็จสมบูรณ์กรุณาเตรียมเอกสารสำหรับการเปิดบัญชีประเภทนิติบุคคล</p>
        </div>

        <div>
          <div class="" *ngIf="isPersonal">
            <p class="text-mist ff-kl mb-0">1.ยืนยันตัวตน (E-Kyc)</p>
            <p class="text-mist ff-kl mb-0">2.แนบเอกสารภาพถ่าย/หน้าสำเนาบัญชีของท่าน</p>
          </div>

          <div *ngIf="!isPersonal">
            <p class="text-mist ff-kl mb-0">1.สำเนาหนังสือรับรองกระทรวงพาณิชย์ ไม่เกิน 3 เดือน</p>
            <p class="text-mist ff-kl mb-0">2.สำเนาแบบ ภ.พ. 20 </p>
            <p class="text-mist ff-kl mb-0">3.สำเนาบัตรประชาชนกรรมการหรือผู้มีอำนาจลงนาม</p>
            <p class="text-mist ff-kl mb-0">4.สำเนาหน้าบัญชีธนาคาร (ต้องเป็นชื่อนิติบุคคลเท่านั้น)</p>
            <p class="text-mist ff-kl mb-0">5.สำเนารายการเดินบัญชีย้อนหลัง 6 เดือนขึ้นไป</p>
          </div>
        </div>

        <div *ngIf="!isPersonal">
          <h3>ทางบริษัทจะติดต่อท่านภายใน 2 วันทำการเพื่อดำเนินการเปิดบัญชีให้เสร็จสมบูรณ์</h3>
        </div>

        <div class="btn-blcok text-center">
          <div class="btn btn-apple w-50" (click)="navigateToHome()">ไปหน้าล็อกอิน</div>
        </div>

    </div>
    
  `,
  styles: [`
  
    .finish {
      padding: 163px  50px 0px 90px;
    }
  
    .btn-blcok {
      padding-top: 126px;
    }

    @media (min-width: 1200px) {

      .finish {
        padding: 163px  50px 0px 90px;
      }
      
      .btn-blcok {
        padding-top: 126px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountFinishComponent extends BaseComponent implements OnDestroy {

  constructor(router: Router, atr: ActivatedRoute ,private storeService: LocalStorageService) {
    super(router, atr);
  }

  ngOnDestroy(): void {
    this.storeService.clear();
  }
}