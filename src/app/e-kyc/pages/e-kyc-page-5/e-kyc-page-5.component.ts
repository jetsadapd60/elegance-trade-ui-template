import { HttpErrorResponse } from "@angular/common/http";
import { CSP_NONCE, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { WebcamImage, WebcamInitError } from "ngx-webcam";
import { Observable, Subject, Subscription } from "rxjs";
import { EKycModel, EKycRespone } from "src/app/models/ekyc.model";
import { UserStorage } from "src/app/models/enum";
import { CompareFaceResponse } from "src/app/models/id-card.model";
import { AigenService } from "src/app/services/aigen.service";
import { EKycService } from "src/app/services/e-kyc.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { PopupService } from "src/app/services/popup.service";
import { RouterService } from "src/app/services/router.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
    selector: 'app-ekyc-page-5',
    template: `
    
    <div class="overflow-hidden pt-3 pt-xl-3 px-5 py-3 wrap">
        <div class="bg-white d-flex h-100 overflow-hidden rounded-4 row">
            <div class="col-3 d-flex flex-column justify-content-center">
                <p class="text-homeworld px-0 ff-kr id-card-text">ขั้นตอนการถ่ายภาพ</p>
                <ol class="text-haze ps-3 ff-kr list-text">
                    <li>หันใบหน้าให้อยู่ในกรอบที่กำหนด</li>
                    <li>หันใบหน้าให้เห็นอย่างชัดเจน และภาพต้องไม่เบลอ</li>
                    <li>อยู่ในบริเวณที่มีแสงสว่างเพียงพอ และไม่มีแสงสะท้อน</li>
                    <li>กดปุ่มถ่ายภาพ</li>
                    <li>เมื่อได้ภาพที่ต้องการ ให้กดปุ่มยืนยัน</li>
                </ol>
            </div>
            <div class="col-6 h-100 text-center">
                <h3 class="text-warning head-text ff-kl">กรุณาหมุนใบหน้าของท่านให้ตรงกับกรอบที่กำหนด</h3>
                <div class="wrap-hero d-flex flex-column align-items-center">
                    <div class="camera rounded-4 bg-secondary overflow-hidden" [ngStyle]="{'background': 'url(' + imagePreview + ') no-repeat 0 0 / cover'}">
                        <webcam
                            [trigger]="triggerObservable"
                            (imageCapture)="handleImage($event)"
                            *ngIf="showWebcam"
                            [allowCameraSwitch]="allowCameraSwitch"
                            [switchCamera]="nextWebcamObservable"
                            [videoOptions]="videoOptions" 
                            (cameraSwitched)="cameraWasSwitched($event)"
                            (initError)="handleInitError($event)">
                        </webcam>
                    </div>
                    <div class="group-btn  d-flex justify-content-center gap-4">
                      <button (click)="toggleWebcam(true)" class="btn ff-kl border rounded text-apple border-apple">
                        ถ่ายใหม่
                      </button>
                      <button (click)="continueBtn()" [disabled]="continue" class="btn ff-kl btn-apple rounded">
                        ยืนยัน
                      </button>
                    </div>
                </div>
            </div>
            <div class="col-3 d-flex align-items-center justify-content-center">
                <div class="capture-btn w-100">
                    <img class="image-capture img-fluid" (click)="triggerSnapshot()"  [ngClass]="{'disable':!showWebcam}" (click)="triggerSnapshot()" type="button" src="assets/images/capture-icon.svg" alt=""/>
                    <br />
                    <span class="text-dull ff-kl">ถ่ายภาพ</span>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`
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
    }
    .wrap-hero {
    }

    .layout {
        height: 90%;
        max-height: 650px;
        background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
        &__left, &__right {
            width: 50%;
        }
        &__right {

        }
    }
    
    @media (min-width: 992px) {

        .row {
            padding: 20px;
            height: 90%;
        }

        .wrap-hero {
            padding: 0px;
        }

        .layout {
            height: 95%;
            max-height: 550px;
            &__left {
                padding: 57px 
            }
        }

        .head-text {
            font-size: 18px;
            padding: 10px 0px;
        }

        .id-card-text {
            font-size: 15px;
        }

        .list-text {
            font-size: 14px;
        }

        .warning-text {
            font-size: 14px;
        }

        .camera {
            width: 350px;
            height: 250px;
        }

        .capture-btn {
            /* padding-top: 47px; */
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

        .row {
            padding: 20px;
            height: 650px;
        }

        .layout {
            &__left {
                padding: 97px 
            }
        }

        .head-text {
            font-size: 26px;
            padding: 20px 0px;
        }

        .id-card-text {
            font-size: 18px;
        }

        .list-text {
            font-size: 16px;
        }

        .warning-text {
            font-size: 16px;
            padding-top: 80px;
        }

        .camera {
            width: 500px;
            height: 383px;
        }

        .capture-btn {
            /* padding-top: 47px; */
            font-size: 20px;
        }

        .group-btn {
            padding-top: 35px;
            width: 100%;
            & .btn {
                width: 150px !important;
                height: 40px;
            }
        }
        
    }
    
    `],
    providers: [AigenService, EKycService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EkycPage5Component implements OnInit, OnDestroy {

  private subscription: Subscription[] = [];

  ekycData: EKycModel | undefined = undefined;
  isContinue                      :boolean = true;
  imagePreview                    : string = '';

  // toggle webcam on/off
  public showWebcam               :boolean = true;
  public allowCameraSwitch        :boolean = true;
  public multipleWebcamsAvailable :boolean = false;
  public deviceId                 : string = '';
  public videoOptions             : MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  constructor(
      private     aigenService  : AigenService,
      protected   router        : RouterService,
      private     spinnerService: SpinnerService,
      private     popupService  : PopupService,
      private     storageService: LocalStorageService,
      private     ekycService   : EKycService,
      private     ref           : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadDataEkyc();
  }

  private loadDataEkyc() {

    const token = this.storageService.getItem<string>(UserStorage.USER_ACCESS_TOKEN);
    if(!token) return; 

    const next = (res: EKycModel) => {
      
      if(!res) return;
      this.ekycData = res;

      // const userData = localStorage.getItem('idCard');

      // if(!userData) return;
      
      // const { firstName, lastName, birthDay, idCard, address } = JSON.parse(userData) ;
      
      // this.ekycData.firstName                     = firstName;
      // this.ekycData.lastName                      = lastName;
      // this.ekycData.birthDay                      = birthDay;
      // this.ekycData.idCard                        = idCard;
      // this.ekycData.mobileKycActionPage           = 'KycPage6';

      // const [houseRegisAddress, residentAddress]  = address;
      // this.ekycData.houseRegisAddress             = houseRegisAddress;
      // this.ekycData.residentAddress               = residentAddress;
      // this.ekycData.sendingDocAddress             = residentAddress;
    }

    this.subscription.push( 
      this.ekycService.load(token).subscribe({ next })
    )
  }

  private ekycSave() {
    const access_token = this.storageService.getItem<string>(UserStorage.USER_ACCESS_TOKEN);
    if(!this.ekycData || !access_token) return;

    this.spinnerService.open();

    this.ekycData.mobileKycActionPage = 'KycPage6';

    const next = (res: EKycRespone) => {
      this.spinnerService.close();
      if(res && res.status) {        
        this.popupService.open({
          type: "complete",
          icon: "complete",
          textHead: 'สำเร็จ',
          disc: res.message,
          btnLabel: "ดำเนิการต่อ",
          confirm: () => {
            this.router.navigation('/e-kyc/KycPage6');
          }
        });
      } else {
        this.popupService.open({
          type: "error",
          icon:  "error",
          textHead: "ไม่สำเร็จ",
          disc: res.message,
          btnLabel: "ดำเนิการต่อ",
          confirm: () => {
            // this.router.navigation('/e-kyc/KycPage6');
          }
        });
      }

    } 
    this.ekycService.save(this.ekycData, access_token).subscribe({next});
  }


  public triggerSnapshot(): void {
    this.trigger.next();
  }

  set continue(value: boolean) {
    this.isContinue = value;
  }
  get continue(): boolean {
    return this.isContinue;
  }

  continueBtn() {
    if(this.continue) return;
    this.ekycSave();
  }

  public toggleWebcam(value: boolean): void {
    // if(this.imagePreview) return;

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
    this.compare(imageAsBase64);

  }

  compare(faceImage: string) {
    const idCardImage: string|null = localStorage.getItem('idCardImage');

    if(!idCardImage) return;

    // เปิด spinner
    this.spinnerService.open();

    const next =  (res: CompareFaceResponse) => {

      if(res && res.status) {
        if (res.data.error_message) {
                
          // ไม่มีรูปบัตรปปช. สำหรับรูปที่ 1
          if (res.data.error_message === 'CAN_NOT_DETECT_FACE: image1') {
            
            // this.spinService.hided();
            this.spinnerService.close();
            this.popupService.open({
              type: "error",
              icon: "error",
              textHead: 'ไม่สำเร็จ',
              disc: "ไม่มีบัตรประชาชน",
              btnLabel: "ดำเนิการต่อ",
              confirm: () => {}
            });
          }

          // ไม่มีรูปใบหน้า สำหรับรูปที่ 2
          if (res.data.error_message === 'CAN_NOT_DETECT_FACE: image2') {
            console.log('CAN_NOT_DETECT_FACE image2')
            this.spinnerService.close();
            this.popupService.open({
              type: "error",
              icon: "error",
              textHead: 'ไม่สำเร็จ',
              disc: "ไม่พบใบหน้า",
              btnLabel: "ถ่ายใหม่อีกครั้ง",
              confirm: () => {}
            });
            // this.buttonStatus = true;
          }
        } else {
          if (res.data.thresholds) {
            const { err_0001 } = res.data.thresholds;

            // เปลี่ยนเทียบสำเร็จ
            if (res.data.confidence >= err_0001) {
              this.saveEkyc();
              this.spinnerService.close();
            }

            // เปลี่ยนเทียบไม่สำเร็จ (หน้าไม่ตรงกับบัตรปปช.)
            if (res.data.confidence < err_0001) {
              this.spinnerService.close();
              this.popupService.open({
                type: "error",
                icon: "error",
                textHead: 'ไม่สำเร็จ',
                disc: "การบันทึกใบหน้าไม่สำเร็จ กรุณาทำตามข้อแนะนำในการดำเนินการบันทึกใบหน้า หรือติดต่อเจ้าหน้าที่โทร 02-613-0888",
                btnLabel: "ลองอีกครั้ง",
                confirm: () => {}
              });
              
            }
          }
        }
      }

      
    }

    // เกิดข้อผิดพลาด
    const error = (err: HttpErrorResponse) => {
    }

    // ส่งรูปบัตรปปช.ไป aigen
    this.subscription.push(
      this.aigenService.faceCompare(idCardImage, faceImage).subscribe({ next, error })
    )
  }

  private saveEkyc() {

    // console.log(this.ekycData)
    const access_token = this.storageService.getItem<string>(UserStorage.USER_ACCESS_TOKEN);
    if(!access_token) return;

    const next = (res: any) => {
      if(res && res.status) this.continue = false;
      this.ref.markForCheck();
    }
    this.ekycService.save(this.ekycData, access_token).subscribe({ next });
  }

  public cameraWasSwitched(deviceId: string): void {
    // console.log('deviceId --->', deviceId)
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
        this.compare(idCardImage);
        this.ref.markForCheck();
      } else {
        console.log('....>', e)
      }
    };
    reader.readAsDataURL(file);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  ngOnDestroy(): void {
    if(this.subscription.length>0) this.subscription.forEach(i=>i.unsubscribe());
  }
}