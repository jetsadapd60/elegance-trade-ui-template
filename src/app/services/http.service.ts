import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { TokenEnum } from "../models/enum";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HttpService {

    private header!: HttpHeaders;
    private access_token: string | undefined;

    constructor(private http: HttpClient, private tokenService: TokenService) {

        const token = this.tokenService.getAccess_token(TokenEnum.ACCESS_TOKEN);
        token ? this.access_token = token:undefined;

        this.initHeaders();
    }

    private initHeaders() {
        this.header = new HttpHeaders({
            'Content-Type':  'application/json',
            "Authorization" : `Bearer ${this.access_token}`,
        });
    }

    get<T>(addHead: boolean, url: string) {
        if(addHead) return this.http.get<T>(url, { headers: this.header });
        if(!addHead) return this.http.get<T>(url);
    }

    post(url: string, data: unknown) {
        return this.http.post(url, data);
    }
}