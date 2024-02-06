import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment.development";
import { Observable } from "rxjs";
import { AmphureResponse, DistinctResponse, ProvinceResponse } from "../models/address.model";

@Injectable()
export class AddressService {

    private readonly BASE_URI: string = environment.base_uri + 'AusirisBackendApi/';
    
    constructor(private http: HttpService) {}

    getProvince() {
        return this.http.get<ProvinceResponse>(`${this.BASE_URI}Master/Province`);
    }

    getAmphure(provinceId: string): Observable<AmphureResponse> {
        return this.http.get<AmphureResponse>(`${this.BASE_URI}Master/Amphure/ByProvince/${provinceId}`);
    }

    getDistinctAndPostCode(amphureId: string): Observable<DistinctResponse> {
        return this.http.get<DistinctResponse>(`${this.BASE_URI}Master/District/ByAmphure/${amphureId}`);
    }
}