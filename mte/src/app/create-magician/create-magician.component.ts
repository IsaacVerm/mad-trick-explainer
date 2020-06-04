import { Component, OnInit } from '@angular/core';

import { Magician } from '../models/app.model';

@Component({
  selector: 'app-create-magician',
  templateUrl: './create-magician.component.html',
  styleUrls: ['./create-magician.component.css']
})
export class CreateMagicianComponent implements OnInit {
  model: Partial<Magician> = {};

  constructor() { }

  ngOnInit(): void {
  }

}
