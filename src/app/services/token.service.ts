import { Injectable } from '@angular/core';
import { TokenEnum } from '../models/enum';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TokenService {
  constructor(private storageService: LocalStorageService) {}
  getAccess_token(key: TokenEnum) {
    return this.storageService.getItem(key);
  }

  setAccess_token(key: TokenEnum, access_token: string) {
    localStorage.setItem(key, access_token);
  }

  removeAccess_token(key: TokenEnum) {
    localStorage.removeItem(key);
  }
}
