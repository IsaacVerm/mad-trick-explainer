import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';

export interface Config {
  webAppUrl: string;
  apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }

  getConfig() {
    return this.http.get<Config>(`/api/config`);
  }
}
