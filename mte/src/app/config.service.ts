import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

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
    return this.http.get<Config>(`${environment.apiUrl}/config`);
  }
}
