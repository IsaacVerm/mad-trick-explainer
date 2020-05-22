import { magicianNames } from './../magicians';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magician-list',
  templateUrl: './magician-list.component.html',
  styleUrls: ['./magician-list.component.css'],
})
export class MagicianListComponent implements OnInit {
  magicianNames = magicianNames;

  constructor() {}

  ngOnInit(): void {}
}
