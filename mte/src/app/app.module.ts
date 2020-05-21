import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MagicianListComponent } from './magician-list/magician-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MagicianListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'magician-list', component: MagicianListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
