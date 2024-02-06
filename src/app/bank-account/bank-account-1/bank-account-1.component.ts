import { AfterViewInit, CSP_NONCE, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, Subscription, tap } from "rxjs";
import { UserStorage } from "src/app/models/enum";
import { BankAccountService } from "src/app/services/bank-account.service";
import { BankService } from "src/app/services/bank.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { PopupService } from "src/app/services/popup.service";
import { RouterService } from "src/app/services/router.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
    selector: 'app-bank-account',
    template: `
    
        <div class="w-100">

            <div>
                <h3 class="text-warning ffkr head-text">คุณกำลังเข้าสู่ขั้นตอนการยื่นเอกสารบัญชีธนาคาร</h3>
            </div>
            <form class="form" [formGroup]="bankaccountInformationFrom">
                <div class="row">
                    <div class="col-10 offset-1 ">
                        <div class="form">
                            <div class="form__group">
                                <div class="form__label text-mist ff-kl">เลือกธนาคาร</div>
                                <select formControlName="cK_SyBa" class="px-2 form__select w-100 border text-dull rounded">
                                    <option value="">-- เลือกธนาคาร --</option>
                                    <option [value]="bank.pK_SyBa" *ngFor="let bank of banks|async"> {{ bank.name }}</option>
                                </select>
                            </div>
                            <div class="form__group">
                                <div class="form__label text-mist ff-kl">หมายเลขบัญชี</div>
                                <input formControlName="bankAccountNo" type="text" name="" placeholder="หมายเลขบัญชีธนาคาร 10 หลัก" id="" class="px-2 form__input w-100 border text-dull rounded">
                            </div>
                            <div class="form__group">
                                <div class="form__label text-mist ff-kl">แนบเอกสาร</div>
                                
                                <div class="d-flex gap-2 align-items-end">
                                    <input readonly [placeholder]="previewImageOne" type="text" name="" disabled value="" id="" class="px-2 w-100 form__input text-dull ff-kl border-dark border-bottom-5 border-top-0 border-end-0 border-start-0">
                                    <input type="file" hidden (change)="selectIdCardOne($event)" accept="image/*" class="upfile__file" #imageFile>
                                    <p (click)="imageFile.click()" class="m-0 text-homeworld ff-kl w-25 text-decoration-underline form__link-text" type="button">เลือกไฟล์</p>
                                </div>
                                <!-- <div class="d-flex gap-2 align-items-end">
                                    <input readonly [placeholder]="previewImageTwo" type="text" name="" disabled value="" id="" class="px-2 w-100 form__input text-dull ff-kl border-dark border-bottom-5 border-top-0 border-end-0 border-start-0">
                                    <input type="file" hidden (change)="selectIdCardTwo($event)" accept="image/*" class="upfile__file" #imageFile>
                                    <p (click)="imageFile.click()" class="m-0 text-homeworld ff-kl w-25 text-decoration-underline form__link-text" type="button">เลือกไฟล์</p>
                                </div>
                                <div class="d-flex gap-2 align-items-end">
                                    <input readonly [placeholder]="previewImageThree" type="text" name="" disabled value="" id="" class="px-2 w-100 form__input text-dull ff-kl border-dark border-bottom-5 border-top-0 border-end-0 border-start-0">
                                    <input type="file" hidden (change)="selectIdCardThree($event)" accept="image/*" class="upfile__file" #imageFile>
                                    <p (click)="imageFile.click()" class="m-0 text-homeworld ff-kl w-25 text-decoration-underline form__link-text" type="button">เลือกไฟล์</p>
                                </div> -->
                                <span class="text-dull ff-kl">*รองรับไฟล์นามสกุล jpg,png,pdf ขนาดไม่เกิน 3 Mb</span>
                            </div>
                            <div class="form__btn-group d-flex gap-3 justify-content-center text-center">
                                <button (click)="onCancle()" class="btn border border-apple text-apple ff-kl">ออก</button>
                                <button [disabled]="statusButton" (click)="onConfirm()" type="submit" class="btn btn-{{statusButton?'million-grey':'apple'}} text-white ff-kl">ดำเนินการ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    
    
    `,
    styles: [
        `
        
        @media (min-width: 992px) {
            ::placeholder {
                font-size: 14px;
            }
            .head-text {
                font-size: 16px;
            }

            .form {

                &__group {
                    padding-bottom: 12px;
                }

                &__group:nth-child(3) {
                    input {
                        width: 60%;
                    }
                    
                    .form__link-text {
                        width: 20%;
                        font-size: 12px;
                    }

                    span {
                        font-size: 12px;
                        padding-top: 5px;
                    }
                    
                }
                
                &__label {
                    font-size: 16px;
                    padding-bottom: 5px;
                }
                
                &__select {
                    font-size: 14px;
                    height: 40px;
                }
                
                &__input {
                    height: 40px;
                    font-size: 14px;
                }

                &__btn-group {

                    .btn {
                        width: 100px;
                        /* height: 30px; */
                    }
                }

                
            }
        }
        
        @media (min-width: 1200px) {
            ::placeholder {
                font-size: 16px;
            }
            .head-text {
                font-size: 26px;
                padding-bottom: 20px;
            }

            .form {
                &__group {
                    padding-bottom: 15px;
                }

                &__group:nth-child(3) {
                    input {
                        width: 80%;
                        height: 35px;
                    }
                    
                    .form__link-text {
                        width: 20%;
                        font-size: 20px;
                    }

                    span {
                        font-size: 16px;
                        padding-top: 5px;
                        padding-top: 10px;
                        display: block;
                    }
                    
                }
                
                &__label {
                    font-size: 16px;
                    padding-bottom: 5px;
                }
                
                &__select {
                    font-size: 16px;
                    height: 48px;
                }
                
                &__input {
                    height: 48px;
                    font-size: 14px;
                }

                &__btn-group {
                    padding-top: 48px;

                    .btn {
                        width: 172px;
                        /* height: 30px; */
                    }
                }

                
            }
        }
        
        
        `
    ],
    providers: [RouterService, BankService, BankAccountService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankAccount1Component implements OnInit, AfterViewInit, OnDestroy {

    private subscriptions: Subscription[] = [];

    bankaccountInformationFrom!: FormGroup;

    banks: Observable<any>;

    statusButton: boolean = true;

    previewImageOne = "บัญชีธนาคาร";
    previewImageTwo = "สำเนาทะเบียนบ้าน";
    previewImageThree = "Statement ย้อนหลัง3-6เดือน";

    constructor(
            protected   routerService   : RouterService, 
            private     bankService     : BankService,
            private     storageService  : LocalStorageService,
            private     ref             : ChangeDetectorRef,
            private     popupService    : PopupService,
            private     spinService     : SpinnerService,
            private     bankAccountService: BankAccountService,
            private     fb              : FormBuilder) {

        this.banks = this.bankService.load();
    }

    ngOnInit(): void {
        this.buildFrom();
    }

    ngAfterViewInit(): void {
        const next = (state: string) => {
            state === "INVALID" ? this.statusButton=true:this.statusButton=false;
            this.ref.markForCheck();
        }
        this.subscriptions.push( this.bankaccountInformationFrom.statusChanges.subscribe({ next }) );
    }

    selectIdCardOne(event: any) {
        const file = event.target.files[0];
        let reader = new FileReader();
        this.previewImageOne = file.name;

        reader.onload = (e) => {
            if (e.target?.result) {
              let image = e.target.result as string;
              this.bankaccountInformationFrom.get("bookBankImage")?.setValue(image.split(',')[1]);
            }
          };
          reader.readAsDataURL(file);
        
        this.ref.markForCheck();
    }

    selectIdCardTwo(event: any) {}

    selectIdCardThree(event: any) {}

    onCancle() {
        // this.routerService.navigation('/setting');
    }
    
    onConfirm() {
        // this.routerService.navigation('/bank-account/2');
        this.saveBankAccount();
    }

    private saveBankAccount() {
        const access_token = this.storageService.getItem<string>(UserStorage.USER_ACCESS_TOKEN);

        if(access_token) {
            this.spinService.open();
            const bankAccountData = { ...this.bankaccountInformationFrom.value, cK_SyACTy: []};

            const next = (res: any) => {
                this.spinService.close();
                
                if(res && !res.status) {
                    this.popupService.open({
                        type: "error",
                        icon: "error",
                        textHead: "ไม่สำเร็จ",
                        disc: "ทำรายการไม่สำเร็จ",
                        btnLabel: "ดำเนินการต่อ",
                        confirm: () => {
                            this.routerService.navigation('/bank-account/2');
                        },
                    });
                }

                if(res && res.status) {
                    this.popupService.open({
                        type: "complete",
                        icon: "complete",
                        textHead: 'สำเร็จ',
                        disc: res.message,
                        btnLabel: "ดำเนินการต่อ",
                        confirm: () => {
                            this.routerService.navigation('/bank-account/2');
                        },
                    });
                }
            }
            this.bankAccountService.save(bankAccountData, access_token).subscribe({ next });
        }
    }



    private buildFrom() {
        this.bankaccountInformationFrom = this.fb.group({
          mobileBankAccActionPage   : ["BankAccountPageEnd", [Validators.required]],
          cK_SyBa                   : ["", [Validators.required]],
          bankAccountNo             : ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
          bookBankImage             : [null, [Validators.required]],
        });
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(item=>item.unsubscribe());
    }

}