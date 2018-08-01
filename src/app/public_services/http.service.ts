import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  local = 'assets';

  constructor(private _http: HttpClient) { }

  getLocalData(url: string) {
    return this._http.get(this.local + url);
  }

}
