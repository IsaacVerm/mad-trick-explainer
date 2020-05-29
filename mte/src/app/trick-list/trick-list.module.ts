import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { TrickListComponent } from './trick-list.component';

@NgModule({
  declarations: [TrickListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([{
      path: '', component: TrickListComponent
    }])
  ]
})
export class TrickListModule { }
