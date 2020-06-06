import { Component, OnInit } from '@angular/core';
import { tricks } from '../tricks';

@Component({
  selector: 'app-magician-list',
  templateUrl: './trick-list.component.html',
  styleUrls: ['./trick-list.component.css'],
})
export class TrickListComponent implements OnInit {
  tricks;

  constructor() {
    this.tricks = tricks;
  }

  ngOnInit(): void {}
}
