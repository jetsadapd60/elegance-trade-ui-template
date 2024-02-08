import { Injectable } from "@angular/core";

/**
 * สำหรับจัดการ Local storage
 */
@Injectable({ providedIn: 'root' })
export class LocalStorageService {

    /**
     * สำหรับดึงข้อมูลที่ต้องการออกจาก storage ของ browser
     * ถ้ามีข้อมูลที่ต้องการจะถูกถอดรหัส
     * หลังจากนั้นจะคืนค่าข้อมูลที่ต้องการกลับออกไป
     * @param key string --> ข้อมูลที่จัดเก็บใน Storage 
     * @returns ถ้ามีข้อมูลที่ต้องการจะคืนค่าข้อมูลออกไป แต่ถ้าไม่มีข้อมูลที่ต้องการจะคืนค่าเป็น undefined
     */
    getItem<T>(key: string): T | undefined {
        const data = localStorage.getItem(key);
        if(data) {
            const decoded = atob(data);
            return JSON.parse(decoded) as T;
        }
        return undefined;
    }

    /**
     * สำหรับเก็บข้อมูลลง Storage ของ browser
     * จะถูกเข้ารหัสก่อนบันทึกลง storage
     * @param key string --> ชื่อของข้อมูลที่จัดเก็บใน Storage 
     * @param value string --> ข้อมูลที่จัดเก็บใน Storage 
     */
    setItem<T>(key: string, value: T): void {
        const data = JSON.stringify(value);
        const encoded = btoa(data);
        localStorage.setItem(key, encoded);
    }

    /**
     * สำหรับลบข้อมูลใน storage ของ browser
     * ตรวจสอบข้อมูลก่อนลบ
     * ถ้ามีข้อมูลจะลบ และคืนค่าเป็น true
     * ถ้าไม่มีข้อมูลจะคืนค่าเป็น false
     * @param key string ---> ชื่อของข้อมูลที่ต้องการลบ
     * @returns 
     */
    removeItem(key: string): boolean {
        if(this.getItem(key)) {
            localStorage.removeItem(key);
            return true;
        }
        return false;
    }

    /**
     * สำหลับลบข้อมูลทั้งหมดใน storage ของ browser
     */
    clear() {
        localStorage.clear();
    }

}