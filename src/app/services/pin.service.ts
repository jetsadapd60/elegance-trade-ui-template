import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment.development";
import { CreatePin, PinResponse } from "../models/pin.model";
import { Observable } from "rxjs";

@Injectable()
export class PinService {

    private readonly BASE_URI: string = environment.backend_api_uri;
    
    constructor(private http: HttpService) {}

    createPin(dataPin: CreatePin): Observable<PinResponse> {
        return this.http.post<PinResponse>(`${this.BASE_URI}FrontendMember/SetPin`, dataPin);
    }
}