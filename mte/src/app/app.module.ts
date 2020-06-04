import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: 'trick-list', component: TrickListComponent },
      { path: 'magician-list', component: MagicianListComponent },
      { path: 'magicians/:magicianId', component: MagicianDetailsComponent },
      { path: 'create-magician', loadChildren: () => import('./create-magician/create-magician.module').then(m => m.CreateMagicianModule) },
      { path: '**', redirectTo: 'trick-list'},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [MagiciansService],
  bootstrap: [AppComponent],
})
export class AppModule {}
