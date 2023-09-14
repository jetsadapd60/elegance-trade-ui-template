import { Component } from "@angular/core";

@Component({
    selector: 'notification',
    template: `
    
    <div class="account row">

        <div class="col-10 text-center offset-1 ">
            <img src="assets/images/image-manage-noti.svg" style="max-width: 350px;" alt="">
        </div>

        <div class="col-10 offset-1">
            <p class="fz-24 text-warning">การแจ้งเตือน</p>
        </div>

        <div class="col-10 offset-1">
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">แจ้งเตือนคำสั่งซื้อขาย</p>
                <switches></switches>
            </div>
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">แจ้งเตือนเคลียริ่ง</p>
                <switches></switches>
            </div>
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">แจ้งเตือนจากระบบ</p>
                <switches></switches>
            </div>
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">ข่าวสาร</p>
                <switches></switches>
            </div>
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">เสียงแจ้งเตือน</p>
                <switches></switches>
            </div>
        </div>



    </div>


    
    `,
    styles: []
})
export class NotificationComponent {}