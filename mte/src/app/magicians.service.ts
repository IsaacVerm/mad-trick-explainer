import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Magician } from './models/app.model';

@Injectable({
  providedIn: 'root'
})
export class MagiciansService {
  constructor(
    private http: HttpClient,
  ) { }

  getMagicians() {
    return this.http.get<Magician[]>(`https://mte-backend.herokuapp.com/magicians`);
  }
}
