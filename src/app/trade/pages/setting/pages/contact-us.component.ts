import { Component } from "@angular/core";

@Component({
    selector: 'contact-us',
    template: `
    
    
    <div class="account row">

        <div class="col-10 text-center offset-1 ">
            <img src="assets/images/image-manage-contact.svg" style="max-width: 350px;" alt="">
        </div>

        <div class="col-10 offset-1">
            <p class="fz-24 text-warning">ติดต่อเรา</p>
        </div>

        <div class="col-10 offset-1">
            <form class="form">
                <div class="form-group d-flex flex-column">
                    <label for="" class="mb-1 text-mist fz-20 mb-2">ชื่อบัญชี</label>
                    <input type="text" placeholder="ชื่อบัญชี" class="px-3 hh-45 border rounded">
                </div>
                <div class="form-group d-flex flex-column mt-3">
                    <label for="" class="mb-1 text-mist fz-20 mb-2">อีเมล</label>
                    <input type="text" placeholder="อีเมล" class="px-3 hh-45 border rounded">
                </div>
                <div class="form-group d-flex flex-column mt-3">
                    <label for="" class="mb-1 text-mist fz-20 mb-2">เบอร์โทร</label>
                    <input type="text" placeholder="เบอร์โทร" class="px-3 hh-45 border rounded">
                </div>
                <div class="form-group d-flex flex-column mt-3">
                    <label for="" class="mb-1 text-mist fz-20 mb-2">เลือกหัวข้อเรื่องที่ต้องการติดต่อ</label>
                    <select name="" id="" class="border rounded" style="height: 48px;">
                        <option value="">-- เลือก --</option>
                    </select>
                </div>
                <div class="form-group d-flex flex-column mt-3">
                    <label for="" class="mb-1 text-mist fz-20 mb-2">ข้อความที่ต้องการติดต่อ</label>
                    <textarea type="text" style="resize: none;" rows="4" placeholder="ข้อความ" class="border px-3 py-1 rounded"></textarea>
                </div>
                <div class="mt-5">
                    <button type="submit" class="btn btn-chianti w-100 btn-lg">ยืนยัน</button>
                </div>
            </form>
        </div>

     </div>




    `,
    styles: []
})
export class ContactUsComponent {}