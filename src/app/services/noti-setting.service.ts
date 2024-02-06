import { CSP_NONCE, Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { HttpService } from "./http.service";
import { map } from "rxjs";
import { NotiSettingModel, NotificationConfigRespons } from "../models/noti-setting.model";

@Injectable()
export class NotiSettingService {
    private readonly BACKEND_API = environment.ausiris_next_url;

    constructor(private httpService: HttpService) {}

    load(dataNoti: any, access_token: string) {
        return this.httpService.patch<NotificationConfigRespons>(`${this.BACKEND_API}api/members/updateNotifications`, dataNoti, access_token)
        .pipe(
            map(res => {    
                console.log('noti-->', res);
            //   if(res && res.status === 'success') {
            //     const { NotiBuySell, NotiClearing, NotiNews, NotiSystem } = res.data;
            //     return { 
            //       NotiBuySell, 
            //       NotiClearing, 
            //       NotiNews, 
            //       NotiSystem
            //     } as NotiSettingModel;
            //   }
              return undefined
            })
          );
    }
}