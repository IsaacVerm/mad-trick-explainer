import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatTableModule,
} from '@angular/material/table';

import { AppComponent } from './app.component';
import { MagicianListComponent } from './magician-list/magician-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MagicianListComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: 'magician-list', component: MagicianListComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
