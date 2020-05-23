import { ConfigService } from './config.service';
import { Config } from './config.service'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface MagicianNames {
  names: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MagiciansService {
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getMagicianNames() {
    this.config.getConfig().subscribe((config: Config) => {
      console.log(config.apiUrl);
    });
    return this.http.get<MagicianNames>('https://127.0.0.1:5000/names');
  }
}
