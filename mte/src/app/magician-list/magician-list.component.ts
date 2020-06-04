import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { MagiciansService } from '../magicians.service';
import { Magician } from '../models/app.model';

@Component({
  selector: 'app-magician-list',
  templateUrl: './magician-list.component.html',
  styleUrls: ['./magician-list.component.css']
})
export class MagicianListComponent implements OnInit {
  magicians$: Observable<Magician[]>;

  constructor(
    private magiciansService: MagiciansService
    ) {}

  ngOnInit(): void {
    this.magicians$ = this.getMagicians();
  }

  getMagicians() {
    return this.magiciansService
      .getMagicians();
  }
}
