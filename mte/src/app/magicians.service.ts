import { switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigService } from './config.service';
import { Magician } from './models/app.model';

@Injectable({
  providedIn: 'root'
})
export class MagiciansService {
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getMagicians() {
    // getConfig() returns an observable
    // this observable is modified a bit before it's passed on
    // https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
    // https://stackoverflow.com/questions/49630371/return-a-observable-from-a-subscription-with-rxjs
    return this.config.getConfig().pipe(
      switchMap(() => {
        return this.http.get<Magician[]>(`/api/magicians`);
      })
    );
  }
}
