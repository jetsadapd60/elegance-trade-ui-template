import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { IdCardData, IdCardResponse } from 'src/app/models/id-card.model';
import { AigenService } from 'src/app/services/aigen.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PopupService } from 'src/app/services/popup.service';
import { RouterService } from 'src/app/services/router.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-ekyc-page-3',
  template: `
    <div class="wrap px-5 py-3 pt-xl-3">
      <div class="layout rounded-4 bg-white overflow-hidden d-flex">
        <div class="layout__left ">
          <h3 class="text-warning ff-kr header-text">การถ่ายภาพบัตรประชาชน</h3>
          <p class="text-homeworld px-0 ff-kr id-card-text">กรุณาเตรียมบัตรประชาชน</p>
          <ul class="list-inline text-haze ff-kr list-text">
            <li>1.วางบัตร และ รูปหน้าให้อยู่ในกรอบที่กำหนด</li>
            <li>2.วางบัตรให้เห็น ตัวเลข ตัวอักษร และรูปหน้า ให้เห็นอย่างชัดเจนและภาพต้องไม่เบลอ</li>
            <li>3.อยู่ในบริเวณที่มีแสงสว่างเพียงพอ และไม่มีแสงสะท้อนจากบัตรประชาชนมารบกวน</li>
            <li>4.ไม่เอานิ้วมือมาบังบัตรประชาชน</li>
            <li>5.บัตรประชาชนต้องไม่หมดอายุ</li>
            <li>6.ข้อมูลบนบัตรประชาชนที่ใช้สแกนจะต้องตรงกับชื่อผู้ใช้บริการที่ลงทะเบียน</li>
          </ul>

          <p class="text-danger warning-text ff-kl">*หากอุปกรณ์ของท่านไม่ได้เชื่อมต่อกับกล้อง กรุณา Download Applicationบนอุปกรณ์ มือถือ/แทปเล็ท เพื่อเข้าสู่กระบวนการยืนยันตัวตนอีกครั้ง</p>
        </div>
        <div class="layout__right h-100">
          <div class="wrap-hero h-100 text-center rounded-4">
            <div class="camera border rounded-3 bg-secondary rounded-xl-4 overflow-hidden position-relative" [ngStyle]="{'background': 'url(' + imagePreview + ') no-repeat 0 0 / cover'}">
              <webcam
                [height]="500"
                [width]="500"
                [trigger]="triggerObservable"
                (imageCapture)="handleImage($event)"
                *ngIf="showWebcam"
                [allowCameraSwitch]="allowCameraSwitch"
                [switchCamera]="nextWebcamObservable"
                [videoOptions]="videoOptions" 
                (cameraSwitched)="cameraWasSwitched($event)"
                (initError)="handleInitError($event)">
              </webcam>
              <!-- <img src="{{imagePreview}}" alt=""> -->
              <div type="button" (click)="imageFile.click()" class="select-btn d-flex algin-items-center justify-content-center position-absolute bottom-0 right-0 mb-2 me-2">
                <small class="tootip-text">อัพโหลดรูปภาพ</small>
                <img class="" width="50" src="assets/images/Gallerry-Icon.svg"  alt="">
                <input type="file" hidden (change)="selectIdCardIamge($event)" accept="image/*" class="upfile__file" #imageFile>
              </div>
            </div>
            <div class="capture-btn w-100">
              <img class="image-capture img-fluid" [ngClass]="{'disable':!showWebcam}" (click)="triggerSnapshot()" type="button" src="assets/images/capture-icon.svg" alt=""/>
              <br />
              <span class="text-dull ff-kl">ถ่ายภาพ</span>
            </div>
            <div class="group-btn  d-flex justify-content-center gap-4">
              <button (click)="toggleWebcam(true)" class="btn ff-kl border rounded text-apple border-apple">ถ่ายใหม่</button>
              <button (click)="continueBtn()" [disabled]="continue" class="btn ff-kl btn-apple rounded">ยืนยัน</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      ::ng-deep {
        .webcam-wrapper {
        }

        .select-btn:hover .tootip-text {
          visibility: visible;
        }

        .tootip-text {
          visibility: hidden;
          position: absolute;
          top: -32px;
          left: -44px;
          background: #000;
          padding: 2px;
          width: 100px;
          border-radius: 20px;
          color: #fff;
          
          &::before {
 
            content: "";
            display: block;
            bottom: -4px;
            right: 28px;
            background: #000;
            width: 10px;
            height: 10px;
            z-index: 10;
            position: absolute;
            transform: rotate(45deg);
          }
        }

        video {
          /* opacity: .1; */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -16%);
        }
      }

      img.disable {
        transition: all 0s;
        opacity: .6;
      }

      .image-capture {
        transition: all .2s ease;
        &:hover {
          transform: rotate(45deg);
        }
      }

      .wrap {
        height: calc(100vh - (88px + 60px));
        /* height: auto; */
      }
      .wrap-hero {
        border-radius: 20px;
        background: linear-gradient(180deg, #fff 1.36%, #f3f3f3 101.79%);
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
      }
      .layout {
        height: auto;
        max-height: 550px;
        background: linear-gradient(180deg, #fff 1.36%, #f3f3f3 101.79%);
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
        &__left, &__right {
          width: 50%;
        }
        &__right {
        }
      }

      .camera {
        width: 10%;
        height: 10%;
        position: relative;
      }

      @media (min-width: 992px) {
        .wrap-hero {
          padding: 57px;
        }

        .layout {
          height: 95%;
          max-height: 550px;

          &__left {
            padding: 57px;
          }
        }

        .header-text {
          font-size: 20px;
        }

        .id-card-text {
          font-size: 15px;
        }

        .list-textv {
          font-size: 14px;
        }

        .warning-text {
          font-size: 14px;
        }

        .camera {
          width: 100%;
          height: 150px;
        }

        .capture-btn {
          padding-top: 47px;
          font-size: 16px;
        }

        .group-btn {
          padding-top: 35px;
          width: 100%;
          & .btn {
            width: 120px !important;
            height: 40px;
          }
        }
      }

      @media (min-width: 1200px) {
        .layout {
          height: 850px;
          &__left {
            /* padding: 97px; */
          }
        }

        .header-text {
          font-size: 26px;
        }

        .id-card-text {
          font-size: 18px;
        }

        .list-textv {
          font-size: 16px;
        }

        .warning-text {
          font-size: 16px;
          padding-top: 80px;
        }

        .camera {
          width: 100%;
          height: 281px;
        }

        .capture-btn {
          padding-top: 20px;
          font-size: 20px;
        }

        .group-btn {
          /* padding-top: 60px; */
          padding-top: 10%;
          width: 100%;
          & .btn {
            width: 150px !important;
            height: 40px;
          }
        }
      }

      @media (min-width: 1400px) {
        .layout {
          max-height: 580px;
          &__left {
            /* padding: 97px; */
          }
        }
      }
    `,
  ],
  providers: [AigenService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EkycPage3Component implements AfterViewInit {

  isContinue = true;
  imagePreview = '';
  



  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string = '';
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  constructor(
    private   aigenService  : AigenService,
    private   popupService  : PopupService,
    protected router        : RouterService,
    private   spinnerService: SpinnerService,
    private   ref           : ChangeDetectorRef,
    private   storageService: LocalStorageService,
  ) {}

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );
  }

  ngAfterViewInit(): void {
  }

  /**
 * เช็คอุปกรณ์รองรับกล้อง
 */
  private async detectCamera() {
    // media ทั้งหมดในเครื่อง
    let checkMediaAccess: MediaDeviceInfo[] = await navigator.mediaDevices.enumerateDevices();
    // ค้าหาว่ามี videoinput ไหม
    let haveCamera: boolean = checkMediaAccess.some(({kind}) => kind === "videoinput");

    // ไม่มีกล้อง
    if(!haveCamera) {
      // this.showWebcam = false;
      // this.continue = true;
    }
  }

  set continue(value: boolean) {
    this.isContinue = value;
  }
  get continue(): boolean {
    return this.isContinue;
  }

  continueBtn() {
    if(this.continue) return;
    this.router.navigation('/e-kyc/KycPage4');
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(value: boolean): void {
    this.showWebcam = value;
    this.imagePreview = "";
    this.continue = true;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {

    // ออกจาก method นี้เมื่อไม่ได้เปิดกล้อง
    if(!this.showWebcam) return;
      
    // กล้องเปิดอยู่
    // หลังจากกดถ่ายแล้วจะปิดกล้อง
    this.toggleWebcam(false);

    // แยกเอาไฟล์รูป ในรูปบบ  Base64
    const { imageAsBase64, imageAsDataUrl } = webcamImage;
    // ตั้งค่ารูปตัวอย่าง
    this.imagePreview = imageAsDataUrl;
    // สำเร็จ
    this.readIdCard(imageAsBase64);

  }

  private readIdCard(imageAsBase64: string) {

    // เปิด spinner
    this.spinnerService.open();

    const next =  (res: IdCardResponse) => {
      if(res && res.status === "success") {
        // เปิดปุ่ม ยืนยัน
        this.continue = false;
        // ปิด spinner
        this.spinnerService.close()
        //
        const idCard = res.data[0];
        // console.log(idCard.address_province.value)
        //
        const idCardData: IdCardData = {
          prefix: idCard.title_th.value || "",
          firstName: idCard.name_th.value || "",
          lastName: idCard.surname_th.value || "",
          idCard: idCard.id_number.value || "",
          birthDay: idCard.dob_en.value || "",
          address: [{
            no: idCard.address_house_building_number.value || "",
            moo: idCard.address_street_address.value.split(' ')[1] || "",
            building: "",
            room: "",
            alley: "",
            road: "",
            province: idCard.address_province.value.replace('จ.', '').trim().replace('จังหวัด', '').trim() || "",
            district: idCard.address_district.value.replace('อ.', '').trim().replace('อำเภอ', '').trim()|| "",
            subDistrict: idCard.address_sub_district.value.replace('ต.', '').trim().replace('ตำบล', '').trim() || "",
            postCode: idCard.address_postcode.value || "",
          }]
        }
        
        // console.log(idCardData);
        localStorage.setItem('idCard', JSON.stringify(idCardData));
        localStorage.setItem('idCardImage', imageAsBase64);
        // this.storageService.setItem('idCardImage', JSON.stringify(imageAsBase64));

        this.ref.markForCheck();
      } else {

      }
    }

    // เกิดข้อผิดพลาด
    const error = (err: HttpErrorResponse) => {
      this.spinnerService.close();
      this.popupService.open({
        type: "error",
        icon: "error",
        textHead: 'ไม่สำเร็จ',
        disc: "ไม่พบบัตรประจำตัวประชาชน",
        btnLabel: "",
        confirm: () => {
          this.continue = true;
          this.ref.markForCheck();
        },
      });
    }

    // ส่งรูปบัตร ปปช.ไป aigen
    this.aigenService
        .readIdCard(imageAsBase64)
        .subscribe({ next, error });
      
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('deviceId --->', deviceId)
    this.deviceId = deviceId;
  }

  selectIdCardIamge(event: any) {
    // เก็บไฟล์ที่เลือกจาก input file
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        // ตัดคำว่า "data:image/png;base64," ออก
        const idCardImageBase64 = e.target.result as string;
        const idCardImage = idCardImageBase64.split(',')[1];
        this.showWebcam=false;
        this.imagePreview = idCardImageBase64;
        this.readIdCard(idCardImage);
        this.ref.markForCheck();
      } else {
        console.log('....>', e)
      }
    };
    reader.readAsDataURL(file);

    this.ref.markForCheck();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
}
