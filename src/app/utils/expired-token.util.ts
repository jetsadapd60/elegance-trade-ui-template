/**
 * * ตรวจสอบอายุของ Access token
 * * ถ้าหมดอายุจะคืนค่า true นอกนั้นคืนค่า false
 * @param access_token string
 * @param educeTime number สำหรับลดอายุของ token โดยมี 5 นาที เป็นค่าเริ่มต้น
 * @returns boolean
 */
const expiredToken = (access_token: string | undefined, educeTime: number = 5) => {

    if (!access_token || access_token === '') return true;

    // แยก payload จาก token
    const payloadToken = access_token.split('.')[1];

    if (payloadToken) {
        // ถอดรหัส payloadToke
        // แล้วแปลงเป็น json object
        const payload = JSON.parse(atob(payloadToken));
        // เข้าถึง exp timestame ของ token
        const exp = payload.exp;

        // 1 second = 1,000 millisecond
        const milliseconds = 1_000;
        // 1 ninute = 60,000 millisecond
        const minute = milliseconds * 60;
        // 1 hours = 36,000,000 millisecond
        const hours = minute * 60;

        // current timestam
        const currentTime = Date.now();
        // expired token time
        // กำหนดให้อายุของ token สั้นลง
        const expToken = (exp * milliseconds) - (minute * educeTime);

        // เทียบเวลาปัจจุบัน กับ เวลาหมดอายถของ token
        // ถ้า currentTime มากกว่าหรือเท่ากับ expToken คืนค่า true นอกนั้นคืนค่า false
        // currentTime เริ่มต้นด้วยเวลาที่น้อยกว่า expToken เพราะ expToken เป็นเวลาที่ถูกกำหนดล่วงหน้าไว้
        return currentTime >= expToken;
    }
    return true;
}

export default expiredToken;