import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatTableModule,
} from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MagicianListComponent } from './magician-list/magician-list.component';
import { TrickListComponent } from './trick-list/trick-list.component';
import { MagicianDetailsComponent } from './magician-details/magician-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TrickListComponent,
    MagicianListComponent,
    MagicianDetailsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: 'trick-list', component: TrickListComponent },
      { path: 'magician-list', component: MagicianListComponent },
      { path: 'magicians/:magicianId', component: MagicianDetailsComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
