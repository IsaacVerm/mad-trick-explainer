import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<Config>('https://127.0.0.1:5000/config');
  }
}
