import { CSP_NONCE, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AmphureResponse, DataAmphure, DataDistinct, DataProvince, DistinctResponse, ProvinceResponse } from "src/app/models/address.model";
import { EKycModel } from "src/app/models/ekyc.model";
import { UserStorage } from "src/app/models/enum";
import { IdCardAddress, IdCardData } from "src/app/models/id-card.model";
import { DataProfile } from "src/app/models/profile.model";
import { AddressService } from "src/app/services/address.service";
import { EKycService } from "src/app/services/e-kyc.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { PopupService } from "src/app/services/popup.service";
import { ProfileService } from "src/app/services/profile.service";
import { RouterService } from "src/app/services/router.service";
import { TokenUserService } from "src/app/services/token-user.service";

@Component({
    selector: 'app-ekyc-page-4',
    template: `
    <form class="form w-100" [formGroup]="personalInformationForm" (ngSubmit)="onSubmitForm()">
        <div class="wrap px-5 pt-3 pt-xl-3 mb-3">
            <div class="layout rounded-4 bg-white overflow-hidden">
                <div class="d-flex">
                    <div class="layout__left">
                        <h3 class="text-homeworld header-text header-text">นโยบายความเป็นส่วนตัวสำหรับลูกค้า</h3>
                        <div class="d-flex h-100 justify-content-center text-center">
                            <img src="assets/images/e-kyc-logo.svg" class="hero-image" alt="">
                        </div>
                    </div>
                    <div class="layout__right h-100">
                        <h3 class="text-warning header-text ff-kl">ข้อมูลส่วนตัว</h3>
                        
                            <div class="form__group">
                                <label class="form__label text-mist ff-kl" for="">คำนำหน้าชื่อ</label>
                                <input type="text" formControlName="prefix" placeholder="นาย" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                            </div>
                            <div class="form__group">
                                <label class="form__label text-mist ff-kl" for="">ชื่อ</label>
                                <input type="text" formControlName="firstName" placeholder="Langhong " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                            </div>
                            <div class="form__group">
                                <label class="form__label text-mist ff-kl" for="">นามสกุล</label>
                                <input type="text" formControlName="lastName" placeholder="Trading " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                            </div>
                            <div class="form__group">
                                <label class="form__label text-mist ff-kl" for="">หมายเลขบัตรประชาชน</label>
                                <input type="text" formControlName="idCard" placeholder="1234567890123 " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                            </div>
                            <div class="form__group">
                                <label class="form__label text-mist ff-kl" for="">วัน/เดือน/ปีเกิด</label>
                                <input type="text" formControlName="birthDay" placeholder="DD/MM/YYYY " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                            </div>
                        
                    </div>
                </div>

                <hr>
                <div formArrayName="address">
                    <div *ngFor="let addressFrom of addressFormArrayControl.controls; let i = index">

                        <div [formGroupName]="i">
                            <div class="d-flex">
                                <div class="layout__left"></div>
                                <div class="layout__right h-100">
                                    <h3 class="text-warning header-text ff-kl" *ngIf="i < 1">ข้อมูลที่อยู่</h3>
                                    <h3 class="text-warning header-text ff-kl" *ngIf="i >= 1">ข้อมูลที่อยู่จัดส่งเอกสาร</h3>
                                    <div class="form w-100">
                                        <div class="row">
                                            <div class="col-6 ">
                                                <div class="form__group">
                                                    <label class="form__label text-mist ff-kl" for="">เลขที่</label>
                                                    <input type="text" formControlName="addressNo" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                                </div>
                                            </div>
                                            <div class="col-6 ">
                                                <div class="form__group">
                                                    <label class="form__label text-mist ff-kl" for="">หมู่</label>
                                                    <input type="text" formControlName="addressMoo" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form__group">
                                                    <label class="form__label text-mist ff-kl" for="">อาคาร / หมู่บ้าน</label>
                                                    <input type="text" formControlName="addressBuilding" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form__group">
                                                    <label class="form__label text-mist ff-kl" for="">ชั้น /ห้อง</label>
                                                    <input type="text" formControlName="addressFloor" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form__group">
                                                    <label class="form__label text-mist ff-kl" for="">ซอย</label>
                                                    <input type="text" formControlName="addressSoi" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form__group">
                                                    <label class="form__label text-mist ff-kl" for="">ถนน</label>
                                                    <input type="text" formControlName="addressStreet" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form__group">
                                            <label class="form__label text-mist ff-kl" for="">จังหวัด</label>
                                            <select  (change)="onSelectProvince($event.target, i)" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                                <option *ngIf="i >= 1">-- เลือก --</option>
                                                <option *ngFor="let province of provinces" [selected]="province.select && i < 1" [value]="province.pK_SyPr">{{province.name_Th}}</option>
                                            </select>
                                        </div>
                                        <div class="form__group">
                                            <label class="form__label text-mist ff-kl" for="">เขต / อำเภอ</label>
                                            <select (change)="onSelectAmphure($event.target, i)" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                                <option *ngIf="i >= 1">-- เลือก --</option>
                                                <option *ngFor="let amphure of amphures[i]" [selected]="amphure.select && i < 1" [value]="amphure.pK_SyAm">{{amphure.name_Th}}</option>
                                            </select>
                                        </div>
                                        <div class="form__group">
                                            <label class="form__label text-mist ff-kl" for="">แขวง / ตำบล</label>
                                            <select (change)="onSelectDistinct($event.target, i)" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                                <option *ngIf="i >= 1">-- เลือก --</option>
                                                <option *ngFor="let distinct of distincts[i]" [selected]="distinct.select && i < 1" [value]="distinct.pK_SyDi">{{distinct.name_Th}}</option>
                                            </select>
                                        </div>
                                        <div class="form__group">
                                            <label class="form__label text-mist ff-kl" for="">รหัสไปรษณีย์</label>
                                            <input type="text" formControlName="addressZipCode" [value]="postCode[i]" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex" *ngIf="i === 0">
                                <div class="layout__left"></div>
                                <div class="layout__right h-100">
                                    <div class="slider-wrap d-flex gap-3 align-items-center">
                                        <switches (onSwitches)="onSwitches($event)"></switches> <span class="text-mist text-switch ff-kl">ที่อยู่จัดส่งเอกสารไม่ตรงกับบัตรประชาชน</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex">
                    <div class="layout__left"></div>
                    <div class="layout__right py-0 h-100">
                        <div class="group-btn  d-flex justify-content-end gap-4">
                            <button type="submit" class="btn ff-kl btn-apple rounded">ยืนยัน</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    
    `,
    styles: [`
    
    .wrap {
        min-height: calc(100vh - (88px + 60px));
        /* height: 100%; */
    }
    
    .wrap-hero {
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
    }
    .layout {
        height: 100%;
        /* max-height: 650px; */
        background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);

        &__left, &__right {
            width: 50%;
        }
        
        &__left {
            padding: 45px;
        }

        &__right {
            padding: 45px 10px 45px 10px;
        }
    }
    
    @media (min-width: 992px) {

        .header-text {
            font-size: 20px;
            padding-bottom: 10px;

        }

        .group-btn {
            padding-top: 20px;
            width: 100%;
            & .btn {
                width: 180px !important;
                height: 40px;
            }
        }

        .form {
            &__group {
                padding-top: 20px;
            }

            &__label {
                font-size: 16px;
                padding-bottom: 8px;
            }

            &__control {
                height: 40px;
                font-size: 14px;
            }
        }

        .text-switch {
            font-size: 18px;
        }
    }

    @media (min-width: 1200px) {
        .layout {

            &__left, &__right {
                width: 50%;
            }
            
            &__left {
                padding: 45px;
            }

            &__right {
                padding: 45px 80px 45px 45px;
            }
        }

        .header-text {
            font-size: 26px;
            padding-bottom: 30px;

        }
        
        .group-btn {
            padding-top: 0px;
            & .btn {
                width: 221px !important;
                height: 40px;
            }
        }


        .form {
            &__group {
                padding-top: 28px;
            }

            &__label {
                font-size: 20px;
                padding-bottom: 12px;
            }

            &__control {
                height: 48px;
                font-size: 18px;
            }
        }

        .text-switch {
            font-size: 24px;
        }
    }
    
    `],
    providers: [AddressService, EKycService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EkycPage4Component implements OnInit {

    personalInformationForm!: FormGroup;

    idCardData              : IdCardData|undefined;

    provinces               : DataProvince[]    = [];
    amphures                : any               = [];
    distincts               : any               = [];
    postCode                : string[]          = [];

    profile: DataProfile|undefined;

    ekycData: EKycModel|undefined;

    constructor(
                protected   router          : RouterService, 
                private     fb              : FormBuilder, 
                private     ref             : ChangeDetectorRef, 
                private     addressService  : AddressService,
                private     ekycService     : EKycService,
                private     popupService    : PopupService,
                private     storageService  :LocalStorageService,
                private     tokenUserService    :TokenUserService) {

        const idCard: string | null = localStorage.getItem('idCard');
        if(idCard) this.idCardData = JSON.parse(idCard);
        this.build();
    }

    ngOnInit(): void {
        
        if(this.idCardData) {
            const { address } = this.idCardData;
            const { province, district, subDistrict  } = address[0];
            this.loadProvince(province, district, subDistrict, 0)
        };

        this.getEkycData();

    }

    private getEkycData() {
        const access_token = this.tokenUserService.accessToken;
        if(access_token) {

            const next = (ekycData: EKycModel) => {
                if(ekycData) this.ekycData = ekycData;
            };
            this.ekycService.load(access_token).subscribe({ next })
        }
    }

    invalidForm() {
        let invalid = true;
        const lenght = this.addressFormArrayControl.length;
        for(let i=0; i<lenght; i++) {
            const item = this.addressFormArrayControl.value[i];

            const {no, moo, province, amphure, district, postCode } = item;

            if(!no || !moo || !province || !amphure || !district || !postCode) {
                invalid = true;
            } else {
                invalid = false
            }
        }

        return invalid;
    }

    onSubmitForm() {
        // localStorage.setItem('idCard', JSON.stringify(this.personalInformationForm.value))
        // console.log(this.personalInformationForm.value)
        this.matchData();

        const access_token = this.tokenUserService.accessToken;
        if(access_token) {
            const next = (res: any) => {

                // complete
                if(res && res.status) {
                    this.popupService.open({
                        type: "complete",
                        icon: "complete",
                        textHead: 'สำเร็จ',
                        disc: res.message,
                        btnLabel: "ดำเนินการต่อ",
                        confirm: () => {
                            this.router.navigation('/e-kyc/KycPage5');
                        },
                    });
                }

                // incomplete
                if(res && !res.status) {
                    this.popupService.open({
                        type: "error",
                        icon: "error",
                        textHead: "ไม่สำเร็จ",
                        disc: "ไม่สำเร็จ",
                        btnLabel: "ดำเนินการต่อ",
                        confirm: () => {
                            // this.router.navigation('/e-kyc/KycPage5');
                        },
                    });
                }
            }

            this.ekycService.save(this.ekycData, access_token).subscribe({ next });
        }
        
    }

    private matchData() {

        const { firstName, lastName, idCard, birthDay, address } = this.personalInformationForm.value;
        const idCardImage: string|null = localStorage.getItem("idCardImage")

        if(this.ekycData) {
        
            this.ekycData.firstName             = firstName;
            this.ekycData.lastName              = lastName;
            this.ekycData.idCard                = idCard;
            this.ekycData.birthDay              = birthDay;
            this.ekycData.houseRegisAddress     = address[0];
            this.ekycData.idCardImage           = idCardImage ?? "";

            if(address && address.length > 1) {
                this.ekycData.residentAddress   = address[1];
                this.ekycData.sendingDocAddress = address[1];
            }
            
        }

    }

    private loadProvince(provinceName: string, amphureName: string, subDistrictName: string, index: number) {
        const next = (res: ProvinceResponse) => {
            if(res && !res.status) return;
            
            const { data: province } = res;

            const updateProvinces = province.map(item => {
                if(item.name_Th === provinceName) {

                    // set province
                    this.setValueFormControl('cK_SyPr', item.pK_SyPr, index);

                    // set default amphure
                    this.loadAmphure(item.pK_SyPr, amphureName, subDistrictName, index);
                    
                    return {...item, select: true};
                };
                return {...item, select: false}
            })

            this.provinces = updateProvinces;

            this.ref.markForCheck();
        }
        this.addressService
            .getProvince()
            .subscribe({ next })
    }

    onSelectProvince(province: any, index: number) {
        const provinceId = province.value;
        this.setValueFormControl('cK_SyPr', provinceId, index);

        const address = this.addressFormArrayControl.value[index];
        this.loadAmphure(address.cK_SyPr, undefined, undefined, index);
        
    }

    private loadAmphure(provinceId: string, amphureName: string|undefined, subDistrictName: string|undefined, index: number) {

        const next = (res: AmphureResponse) => {
            if(res && !res.status) return;

            const { data: amphures } = res;
            
            const updateAmphures = amphures.map(item => {
                if(item.name_Th === amphureName) {

                    this.setValueFormControl('cK_SyAm', item.pK_SyAm, index);

                    this.loadDistinct(item.pK_SyAm, subDistrictName, index);

                    return {...item, select: true};
                };
                return {...item, select: false}
            })
            
            if(!amphureName) this.setValueFormControl('cK_SyAm', updateAmphures[0].pK_SyAm, index);
            this.loadDistinct(updateAmphures[index].pK_SyAm, subDistrictName, index);


            this.amphures[index] = updateAmphures;
            this.ref.markForCheck();
        }

        this.addressService
            .getAmphure(provinceId)
            .subscribe({ next })
    }

    onSelectAmphure(amphure: any, index: number) {
        const amphureId        = amphure.value;
        this.setValueFormControl('cK_SyAm', amphureId, index);

        const address = this.addressFormArrayControl.value[index];
        this.loadDistinct(address.cK_SyAm, undefined, index);
    }

    loadDistinct(amphureId: string, subDistrictName: string|undefined, index: number) {
        const next = (res: DistinctResponse) => {

            if(!res || (res && !res.status)) return;
            
            const { data: districts } = res;
            
            const updateDistincts = districts.map(item => {

                if(item.name_Th === subDistrictName) {
                    this.setValueFormControl('cK_SyDi', item.pK_SyDi, index);
                    this.setValueFormControl('addressZipCode', item.code, index);

                    this.postCode[index] = item.code;
                    return {...item, select: true};
                };

                this.postCode[index] = item.code;
                return {...item, select: false}
            })
            
            if(!subDistrictName) {
                this.setValueFormControl('cK_SyDi', updateDistincts[index].pK_SyDi, index)
                this.setValueFormControl('addressZipCode', updateDistincts[index].code, index);
            };

            // this.distincts = updateDistincts;
            this.distincts[index] = updateDistincts;

            this.ref.markForCheck();
        }
        this.addressService
            .getDistinctAndPostCode(amphureId)
            .subscribe({ next })
    }

    onSelectDistinct(distinct: any, index: number) {
        const distinctId        = distinct.value;
        this.setValueFormControl('cK_SyDi', distinctId, index);
    }

    private setValueFormControl(name: string, value: string, index: number) {
        const addressControl    = this.addressFormArrayControl.value[index];
        addressControl[name]    = value;
    }

    private build() {
        if(!this.idCardData) return;
        const {
                no, 
                moo, 
                building, 
                room, 
                alley, 
                road,
            } = this.idCardData.address[0];
        
        this.personalInformationForm = this.fb.group({
            prefix      : [this.idCardData.prefix       ||  ""],
            firstName   : [this.idCardData.firstName    ||  "", [Validators.required]],
            lastName    : [this.idCardData.lastName     ||  "", [Validators.required]],
            idCard      : [this.idCardData.idCard       ||  "", [Validators.required]],
            birthDay    : [this.idCardData.birthDay     ||  "", [Validators.required]],
            address     : this.fb.array([
                this.fb.group({
                    addressNo       : [no               ||  "", [Validators.required]],
                    addressMoo      : [moo              ||  ""],
                    addressBuilding : [building         ||  ""],
                    addressFloor    : [room             ||  ""],
                    addressSoi      : [alley            ||  ""],
                    addressStreet   : [road             ||  ""],
                    addressZipCode  : [""],
                    cK_SyPr         : [],
                    cK_SyAm         : [],
                    cK_SyDi         : [],
                })
            ])
        });
    }

    addAdressItem() {
        (this.personalInformationForm?.get('address') as FormArray)?.push(this.address());
    }

    removeAddressItem(index: number) {
        (this.personalInformationForm?.get('address') as FormArray).removeAt(index);
    }

    private address() {
        const addressItem = this.fb.group({
            addressNo       : [""],
            addressMoo      : [""],
            addressBuilding : [""],
            addressFloor    : [""],
            addressSoi      : [""],
            addressStreet   : [""],
            addressZipCode  : [""],
            cK_SyPr         : [""],
            cK_SyAm         : [""],
            cK_SyDi         : [""],
        });

        return addressItem;
    }

    get addressFormArrayControl() {
        return this.personalInformationForm.get('address') as FormArray;
    }

    onSwitches(value: boolean) {
        if(value === true) this.addAdressItem();
        if(value === false) this.removeAddressItem(1);
    }
}