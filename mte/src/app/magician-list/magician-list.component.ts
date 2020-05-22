import { magicians } from './../magicians';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magician-list',
  templateUrl: './magician-list.component.html',
  styleUrls: ['./magician-list.component.css'],
})
export class MagicianListComponent implements OnInit {
  // https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
  // Set only contains unique values so automatically removes duplicates
  magicianNames = magicians.map(magician => magician.name);
  uniqueMagicianNames = Array.from(new Set(this.magicianNames))

  constructor() {}

  ngOnInit(): void {}
}
