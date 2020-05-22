import { magicianNames } from './../magicians';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magician-details',
  templateUrl: './magician-details.component.html',
  styleUrls: ['./magician-details.component.css'],
})
export class MagicianDetailsComponent implements OnInit {
  magician;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.magician = magicianNames[+params.get('magicianId')];
    })
  }
}
