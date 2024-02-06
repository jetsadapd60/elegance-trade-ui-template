import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpService } from './http.service';
import { ProfileRespone } from '../models/profile-respone.model';
import { EKycModel, EKycRespone } from '../models/ekyc.model';

@Injectable()
export class EKycService implements OnDestroy {

  private readonly BASE_URL_BackendApi: string = environment.backend_api_uri;

  constructor(private http: HttpService) {}

  // จบขั้นตอนการทำ ekyc
  end(access_token: string) {
    return this.http.get(`${this.BASE_URL_BackendApi}FrontendMember/KycEnd`, access_token)
  } 

  // ดึงข้อมูลการทำ ekyc
  load(access_token: string): Observable<EKycModel> {
    return this.http
        .get<ProfileRespone>(`${this.BASE_URL_BackendApi}FrontendMember/GetProfile`, access_token)
        .pipe(
          map((res: ProfileRespone) => {
            // console.log('get ekyc data >>>>>>', res);
            const { mobileKycActionPage,
              member: {
                cK_SyCo_PersonNationality, firstName, lastName, idCard, idCardImage, birthDay,
                email, cK_SyACTy, cK_SyCo_PersonMobile, mobile, cK_SyJPo, companyName, cK_SySFu, cK_SyMIn_Month,
                cK_SyMIn_Year, sourceOfFundOther: sourceFundOther, houseRegisAddress, residentAddress, sendingDocAddress,
              },
            } = res.data;
            
            return {
              mobileKycActionPage, cK_SyCo_PersonNationality, firstName, lastName, idCard, idCardImage,
              birthDay, email, cK_SyACTy: cK_SyACTy? cK_SyACTy:[], cK_SyCo_PersonMobile, mobile, cK_SyJPo, companyName, cK_SyMIn_Month,
              cK_SyMIn_Year, cK_SySFu, sourceFundOther, houseRegisAddress: houseRegisAddress, 
              residentAddress: residentAddress, sendingDocAddress: sendingDocAddress, state: true
            } as EKycModel;
          })
        )
  }

  // บันทึกการทำ ekyc
  save(kycData: any, access_token: string): Observable<EKycRespone> {
    return this.http.post<EKycRespone>(`${this.BASE_URL_BackendApi}FrontendMember/KycSave`, kycData, access_token);
  }

  ngOnDestroy(): void {
    // console.log("EKyc Service is Destroy.");
  }
}
