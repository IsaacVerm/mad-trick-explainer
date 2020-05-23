import { Injectable } from '@angular/core';
import { magicianNames } from './magicians';

@Injectable({
  providedIn: 'root'
})
export class MagiciansService {
  constructor() { }

  getMagicianNames() {
    return magicianNames;
  }
}
