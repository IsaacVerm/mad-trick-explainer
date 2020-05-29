import { map, switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Config, ConfigService } from './config.service';
import { magicianNames } from './magicians';

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
    // getConfig() returns an observable
    // this observable is modified a bit before it's passed on
    // https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
    // https://stackoverflow.com/questions/49630371/return-a-observable-from-a-subscription-with-rxjs
    return this.config.getConfig().pipe(
      switchMap(config => {
        const apiUrl = config.apiUrl;
        return this.http.get<MagicianNames>(`/api/names`).pipe(
          map(response => response.names)
        );
      })
    );
  }
}
