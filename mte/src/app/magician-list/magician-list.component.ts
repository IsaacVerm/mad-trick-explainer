import { Component, OnInit } from '@angular/core';
import { magicians } from '../magicians'

@Component({
  selector: 'app-magician-list',
  templateUrl: './magician-list.component.html',
  styleUrls: ['./magician-list.component.css'],
})
export class MagicianListComponent implements OnInit {
  magicians = magicians;
  columnsToDisplay = ['name', 'trick'];

  constructor() {}

  ngOnInit(): void {}
}
