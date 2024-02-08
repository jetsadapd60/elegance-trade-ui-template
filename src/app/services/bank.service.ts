import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { HttpService } from "./http.service";
import { BankNameDataModel, BankNameModel } from "../models/bank.model";
import { Observable, map } from "rxjs";

@Injectable()
export class BankService {
    private readonly BACKEND_API = environment.backend_api_uri;

    constructor(private httpService: HttpService) {}

    load(): Observable<BankNameDataModel[] | undefined> {
        return this.httpService.get<BankNameModel>(`${this.BACKEND_API}Master/Bank`)
        .pipe(map((bankName) => {
            // console.log(bankName)
            if(bankName && bankName.status) return bankName.data.map(res => ({ ...res, picture: `${this.BACKEND_API}${res.picture}`}));
            return undefined;
          }));;
    }
}