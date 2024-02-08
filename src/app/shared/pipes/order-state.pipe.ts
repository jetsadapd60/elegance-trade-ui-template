import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tranOrderState'
})
export class OrderStatePipe implements PipeTransform {
    transform(status: "Cancelled" | "Matched" | "Waiting", ...args: any[]) {
        switch(status) {
            case "Cancelled": return "ยกเลิกราคา"
            case "Matched": return "ยืนยันราคา"
            case "Waiting": return "ตั้งรอราคา"
        }
    }

}