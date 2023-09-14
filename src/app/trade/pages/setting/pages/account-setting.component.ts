import { Component } from "@angular/core";

@Component({
    selector: 'account-setting',
    template: `

        <div class="account row">

            <div class="text-center col-9 offset-2 ">
                <img src="assets/images/image-manage-account.svg" style="max-width: 350px;" alt="">
            </div>

            <div class="col-9 offset-2">
                <p class="fz-24 text-warning">ข้อมูลส่วนตัว</p>
            </div>

            <div class="col-9 offset-2">
                <form class="form">
                    <div class="form-group d-flex flex-column">
                        <label for="" class="mb-1 text-mist fz-20">ชื่อ</label>
                        <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border rounded">
                        <div class="text-end pt-3">
                            <button class="btn btn-apple text-white pt-1" style="width: 109px; height: 31px">ดำเนินการ</button>
                        </div>
                    </div>
                </form>
                <form class="form">
                    <div class="form-group d-flex flex-column">
                        <label for="" class="mb-1 text-mist fz-20">บัญชีธนาคาร</label>
                        <textarea type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border rounded"></textarea>
                        <div class="pt-3 d-flex justify-content-between">
                            <small class="text-apple">*รองรับไฟล์นามสกุล jpg,png,pdf ขนาดไม่เกิน 5 mb</small>
                            <button class="btn btn-apple text-white  pt-1" style="width: 109px; height: 31px">ดำเนินการ</button>
                        </div>
                    </div>
                </form>
                <form class="form">
                    <div class="form-group d-flex flex-column">
                        <label for="" class="mb-1 text-mist fz-20">เบอร์มือถือ</label>
                        <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border rounded">
                        <div class="text-end pt-3">
                            <small class="fz-14 text-homeworld text-decoration-underline">เปลี่ยนแปลงหมายเลขโทรศัพท์</small>
                        </div>
                    </div>
                </form>
                <form class="form">
                    <div class="form-group d-flex flex-column">
                        <label for="" class="mb-1 text-mist fz-20">อีเมล</label>
                        <input type="text" placeholder="lhcdemotrading@gmail.com" class="px-3 hh-45 border rounded">
                    </div>
                </form>
            </div>



        </div>
    
    `,
    styles: [`
        ::placeholder {
            color: #9C9FA6;
            font-size: 20px;
        }
    `]
})
export class AccountSettingComponent {}