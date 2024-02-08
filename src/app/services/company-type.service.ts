import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment.development";
import { CompanyType } from "../models/company-type.model";
import { Observable, map, tap } from "rxjs";

@Injectable()
export class CompanyTypeService {

    private readonly BASE_URI: string = environment.backend_api_uri;

    constructor(private http: HttpService) {}

    companyType():Observable<CompanyType[]> {
        return this.http.get<CompanyType[]>(`${this.BASE_URI}Master/CompanyType/M`)
    }
}