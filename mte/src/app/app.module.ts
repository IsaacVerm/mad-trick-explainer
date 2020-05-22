import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatTableModule,
} from '@angular/material/table';

import { AppComponent } from './app.component';
import { TrickListComponent } from './trick-list/trick-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TrickListComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: 'trick-list', component: TrickListComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
