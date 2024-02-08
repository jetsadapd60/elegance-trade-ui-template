import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment.development";
import { HttpService } from "./http.service";

@Injectable()
export class ConfigService {
    private readonly BASE_URI: string = environment.trade_ausirisnext;

    private config = new BehaviorSubject<any>([]);
    constructor(private http: HttpService) {
        this.getConfig();
    }

    getConfig() {
        const next = (res: any) => {
            console.log(res)
        }
        this.http
            .get(`${this.BASE_URI}server-api/api/members/updateNotifications`)
            .subscribe({ next});
    }
}