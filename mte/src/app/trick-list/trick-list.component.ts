import { Component, OnInit } from '@angular/core';
import { magicians } from '../magicians';

@Component({
  selector: 'app-magician-list',
  templateUrl: './trick-list.component.html',
  styleUrls: ['./trick-list.component.css'],
})
export class TrickListComponent implements OnInit {
  magicians = magicians;
  columnsToDisplay = ['name', 'trick'];

  constructor() {}

  ngOnInit(): void {}
}
