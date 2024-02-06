import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CompareFaceResponse, IdCardResponse } from '../models/id-card.model';
import { Observable } from 'rxjs';

@Injectable()
export class AigenService {
  private readonly AIGEN_URI = 'https://apis.aigen.online/aiscript/idcard/v2';
  private readonly AIGEN_KEY = environment.aigen_api_key;

  private readonly BASE_URL: string = environment.backend_api_uri;

  constructor(private http: HttpClient) {}

  readIdCard(image: string): Observable<IdCardResponse> {
    const headers = { 'x-aigen-key': this.AIGEN_KEY };
    const data = {
      image,
      return_face: true,
      return_gender: true,
      return_signed: true,
      do_text_correct: true,
    };
    return this.http.post<IdCardResponse>(this.AIGEN_URI , data, { headers: headers });
  }

  faceCompare(image1: string, image2: string): Observable<CompareFaceResponse> {
    const data = {
        xAiGenKey   : this.AIGEN_KEY,
        url         : 'https://apis.aigen.online/aiface/face-compare/v1',
        param       : JSON.stringify({"image1": image1, "image2": image2})
      }
    return this.http.post<CompareFaceResponse>(`${this.BASE_URL}Desktop/AiGen/Post`, data);
  }
}
