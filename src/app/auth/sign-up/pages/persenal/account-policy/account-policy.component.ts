import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base-class/base.component';

@Component({
  selector: 'app-account-policy',
  template: `
    
    <div class="card h-100 rounded-top-4 rounded-bottom-0 border-0">
      <div class="card-body">
        <div class="">
          <h2 class="ff-kr text-yellow-indian head-text">นโยบายความเป็นส่วนตัวสำหรับลูกค้า</h2>
        </div>

        <div>
          <blockquote class="ff-kl text-mist">
            บริษัท เล่งหงษ์ คอมโมดิตีส์ จำกัด <br>
            ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ  <br>
            โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม ใช้  <br>
            หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงสิทธิต่าง ๆ ของเจ้าของข้อมูลส่วนบุคคล  <br>
            ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล <br>
            การเก็บรวบรวมข้อมูลส่วนบุคคล <br>
            เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง ดังต่อไปนี้ <br>
              <!-- ● การสมัครสมาชิก <br>
              ● โทรศัพท์ <br>
              ● อีเมล <br> -->
              <ul class="mb-0">
                <li>การสมัครสมาชิก</li>
                <li>โทรศัพท์</li>
                <li>อีเมล</li>
              </ul>
            ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม <br>
            ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สัญชาติ เลขประจำตัวประชาชน หนังสือเดินทาง เป็นต้น<br>
            ข้อมูลการติดต่อ เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น<br>
            ข้อมูลบัญชี เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น<br>
            หลักฐานแสดงตัวตน เช่น สำเนาบัตรประจำตัวประชาชน สำเนาหนังสือเดินทาง เป็นต้น<br>
            ข้อมูลการทำธุรกรรมและการเงิน เช่น ประวัติการสั่งซื้อ รายละเอียดบัตรเครดิต<br>
            ข้อมูลทางเทคนิค เช่น IP address, Cookie ID, ประวัติการใช้งานเว็บไซต์ (Activity Log) เป็นต้น<br>
            ข้อมูลอื่น ๆ เช่น รูปภาพ ภาพเคลื่อนไหว และข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล 
            ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม <br>
            ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สัญชาติ เลขประจำตัวประชาชน หนังสือเดินทาง เป็นต้น<br>
            ข้อมูลการติดต่อ เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น<br>
            ข้อมูลบัญชี เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น<br>
            หลักฐานแสดงตัวตน เช่น สำเนาบัตรประจำตัวประชาชน สำเนาหนังสือเดินทาง เป็นต้น<br>
            ข้อมูลการทำธุรกรรมและการเงิน เช่น ประวัติการสั่งซื้อ รายละเอียดบัตรเครดิต<br>
            ข้อมูลทางเทคนิค เช่น IP address, Cookie ID, ประวัติการใช้งานเว็บไซต์ (Activity Log) เป็นต้น<br>
          </blockquote>

          <div class="d-flex gap-3 justify-content-center pt-4">
            <button (click)="backward()" class="btn border border-apple btn-lg text-apple ff-kl ww-150">ปฏิเสธ</button>
            <button (click)="forward()" class="btn btn-apple btn-lg ff-kl ww-150">ยินยอม</button>
          </div>
        </div>
      </div>
    </div>

  `,
  styles: [`

        /* X-Small devices (portrait phones, less than 576px) */
        /* blockquote::after {
          display: block;
          content: '';
          position: sticky;
          left: 0px;
          bottom: 0px;
          width: 100%;
          height: 30px;
          background: rgb(255,255,255);
          background: linear-gradient(0deg, rgba(255,255,255,0.7357317927170868) 0%, rgba(255,255,255,1) 41%, rgba(255,255,255,1) 100%);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
        } */
  
  
        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 992px) { 
          .head-text {
            font-size: 20px;
          }

          blockquote {
            font-size: 12px;
            height: 400px;
            overflow-y: scroll;

            position: relative;
          }

          .btn {
            font-size:  18px;
          }
         }

        /* Large devices (desktops, 992px and up) */
        @media (min-width: 1200px) { 
          .head-text {
            font-size: 24px;
          }

          blockquote {
            font-size: 14px;
            height: 450px;
          }

          .btn {
            font-size: 20px; 
          }
         }
  
  
  
  `]
})
export class AccountPolicyComponent extends BaseComponent {
  
  constructor(override router: Router, override atr: ActivatedRoute) {
    super(router, atr);
  }

  backward() {
    this.navigation('account');
  }
  
  forward() {
    this.navigation('insert', this.page);
  }

}
