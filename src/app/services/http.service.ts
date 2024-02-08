import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(private http: HttpClient) {}

    get<T>(url: string): Observable<T>;
    get<T>(url: string, access_token: string): Observable<T>;
    get(url: string, access_token?: string|undefined) {
        if(access_token) {
            return this.http.get(url, {headers: {Authorization: `Bearer ${access_token}`}})
        }
        return this.http.get(url);
    }

    post<T>(url: string, data: unknown): Observable<T>;
    post<T>(url: string, data: unknown, access_token: string): Observable<T>;
    post<T>(url: string, data: unknown, access_token?: string): Observable<T> {
        if(access_token) {
            return this.http.post<T>(url, data, {headers: {Authorization: `Bearer ${access_token}`}});
        };
        return this.http.post<T>(url, data);
    };

    patch<T>(url: string, data: unknown): Observable<T>;
    patch<T>(url: string, data: unknown, access_token: string): Observable<T>;
    patch<T>(url: string, data: unknown, access_token?: string): Observable<T> {
        if(access_token) {
            return this.http.patch<T>(url, data, {headers: {Authorization: `Bearer ${access_token}`}});
        };
        return this.http.patch<T>(url, data);
    }

}