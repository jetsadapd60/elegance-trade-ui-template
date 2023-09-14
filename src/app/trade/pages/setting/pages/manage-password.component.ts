import { Component } from "@angular/core";

@Component({
    selector: 'manage-password',
    template: `

        <div class="account row">

            <div class="col-10 text-center offset-1 ">
                <img src="assets/images/image-manage-password.svg" style="max-width: 350px;" alt="">
            </div>

            <div class="col-10 offset-1">
                <p class="fz-24 text-warning">ตั้งค่ารหัสผ่าน</p>
            </div>

            <div class="col-10 offset-1">
                <form class="form">
                    <div class="form-group d-flex flex-column">
                        <label for="" class="mb-1 text-mist fz-20 mb-2">รหัสผ่าน</label>
                        <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border rounded">
                    </div>
                    <div class="form-group d-flex flex-column mt-3">
                        <label for="" class="mb-1 text-mist fz-20 mb-2">ยืนยันรหัสผ่าน</label>
                        <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border rounded">
                    </div>
                    <div class="mt-5">
                        <p class="mb-0 fz-16 ff-kl text-dull">รหัสผ่านอย่างน้อย8ตัวอักษร</p>
                        <p class="mb-0 fz-16 ff-kl text-dull">ต้องมีตัวอักษรภาษาอังกฤษตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว</p>
                        <p class="mb-0 fz-16 ff-kl text-dull">ต้องมีตัวอักษรภาษาอังกฤษตัวพิมพ์เล็กอย่างน้อย 1 ตัว</p>
                        <p class="mb-0 fz-16 ff-kl text-dull">ต้องมีอักขระพิเศษอย่างน้อย 1 ตัว</p>
                    </div>
                    <div class="mt-5">
                        <button type="submit" class="btn btn-chianti w-100 btn-lg">ยืนยัน</button>
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
export class ManagePasswordComponent {}