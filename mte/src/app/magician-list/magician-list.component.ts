import { MagiciansService } from './../magicians.service';
import { MagicianNames } from './../magicians.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-magician-list',
  templateUrl: './magician-list.component.html',
  styleUrls: ['./magician-list.component.css']
})
export class MagicianListComponent implements OnInit, OnDestroy {
  magicianNames;
  subscription;

  constructor(
    private magiciansService: MagiciansService
    ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getMagicianNames();
  }

  getMagicianNames() {
    this.subscription = this.magiciansService
      .getMagicianNames()
      .subscribe((response: MagicianNames) => {
        this.magicianNames = response.names;
      });
  }
}
