import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../environments/environment';
import { Magician } from './models/app.model';

@Injectable({
  providedIn: 'root'
})
export class MagiciansService {
  constructor(
    private http: HttpClient,
  ) { }

  getMagicians() {
    return this.http.get<Magician[]>(`${environment.backend.baseURL}/magicians`);
  }
}
