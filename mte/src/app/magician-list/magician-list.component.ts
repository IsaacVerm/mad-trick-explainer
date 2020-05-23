import { MagiciansService } from './../magicians.service';
import { MagicianNames } from './../magicians.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magician-list',
  templateUrl: './magician-list.component.html',
  styleUrls: ['./magician-list.component.css']
})
export class MagicianListComponent implements OnInit {
  magicianNames;

  constructor(
    private magiciansService: MagiciansService
    ) {}

  ngOnInit(): void {
    this.getMagicianNames();
  }

  getMagicianNames() {
    this.magiciansService
      .getMagicianNames()
      .subscribe((response: MagicianNames) => {
        this.magicianNames = response.names;
      });
  }
}
