import { Component } from "@angular/core";

@Component({
    selector: 'manage-pin',
    template: `
    
            <div class="account row">

                <div class="col-10 text-center offset-1 ">
                    <img src="assets/images/image-manage-password.svg" style="max-width: 350px;" alt="">
                </div>

                <div class="col-10 offset-1">
                    <p class="fz-24 text-warning">ตั้งค่ารหัส PIN</p>
                </div>

                <div class="col-10 offset-1">
                    <form class="form">
                        <div class="form-group d-flex flex-column">
                            <label for="" class="mb-1 text-mist fz-20 mb-2">รหัส PIN</label>
                            <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border rounded">
                        </div>
                        <div class="form-group d-flex flex-column mt-3">
                            <label for="" class="mb-1 text-mist fz-20 mb-2">ยืนยันรหัส PIN</label>
                            <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border rounded">
                        </div>
                        <div class="mt-5 text-center">
                            <p class="mb-0 fz-16 ff-kl text-dull text-decoration-underline">ลืมรหัส PIN ?</p>
                        </div>
                        <div class="mt-5">
                            <button type="submit" class="btn btn-chianti w-100 btn-lg">เปลี่ยนรหัส PIN</button>
                        </div>
                    </form>
                </div>



            </div>

    `,
    styles: []
})
export class ManagePinComponent {}