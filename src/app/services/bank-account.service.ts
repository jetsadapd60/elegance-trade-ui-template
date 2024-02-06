import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { HttpService } from "./http.service";

@Injectable()
export class BankAccountService {
    private readonly BACKEND_API = environment.backend_api_uri;

    constructor(private httpService: HttpService) {}

    save(dataBankAccount: any, access_token: string) {
        return this.httpService.post(`${this.BACKEND_API}FrontendMember/BankAccountSave`, dataBankAccount, access_token);
    }
}