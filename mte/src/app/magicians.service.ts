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
    private http: HttpClient
  ) { }

  getMagicianNames() {
    // return this.http.get<MagicianNames>('./magician-names.json');
    return this.http.get('assets/magician-names.json');
  }
}
