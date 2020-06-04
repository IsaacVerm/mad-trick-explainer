import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { MagicianDetailsComponent } from './magician-details/magician-details.component';
import { MagicianListComponent } from './magician-list/magician-list.component';
import { MagiciansService } from './magicians.service';
import { TrickListComponent } from './trick-list/trick-list.component';

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
      { path: '**', redirectTo: 'trick-list'},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [ConfigService, MagiciansService],
  bootstrap: [AppComponent],
})
export class AppModule {}
