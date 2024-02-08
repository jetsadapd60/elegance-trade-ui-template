import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { MarketingStorage, UserStorage } from '../models/enum';

import expiredToken from '../utils/expired-token.util';

@Injectable({ providedIn: 'root' })
export class TokenUserService {

  protected _accessToken  : string | undefined;
  protected _refreshToken : string | undefined;
  protected _expToken     : boolean = true;

  constructor(protected storage: LocalStorageService) {
    this.initToken();
  }
  
  initToken() {
    this._accessToken   = this.storage.getItem<string>(UserStorage.USER_ACCESS_TOKEN);
    this._refreshToken  = this.storage.getItem<string>(UserStorage.USER_REFRESH_TOKEN);
    this._expToken      = expiredToken(this._accessToken);
  }

  get accessToken(): string | undefined {
    this.initToken();
    return this._accessToken;
  }

  get refreshToken(): string | undefined {
    this.initToken();
    return this._refreshToken;
  }

  setAccessToken(access_token: string): void {
    if (access_token) {
      this.storage.setItem<string>(UserStorage.USER_ACCESS_TOKEN, access_token);
      this.initToken();
    }
  }

  setRefreshToken(refresh_token: string): void {
    if (refresh_token) {
      this.storage.setItem<string>(UserStorage.USER_REFRESH_TOKEN, refresh_token);
      this.initToken();
    }
  }

  get expiredToken(): boolean {
    this.initToken();
    return this._expToken;
  }


}
