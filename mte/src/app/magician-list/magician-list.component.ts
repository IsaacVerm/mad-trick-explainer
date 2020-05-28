import { Observable } from 'rxjs';
import { MagiciansService, MagicianNames } from './../magicians.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magician-list',
  templateUrl: './magician-list.component.html',
  styleUrls: ['./magician-list.component.css']
})
export class MagicianListComponent implements OnInit {
  magicianNames$: Observable<string[]>;

  constructor(
    private magiciansService: MagiciansService
    ) {}

  ngOnInit(): void {
    this.magicianNames$ = this.getMagicianNames();
  }

  getMagicianNames() {
    return this.magiciansService
      .getMagicianNames();
  }
}
