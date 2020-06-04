import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';

import { CreateMagicianComponent } from './create-magician.component';

const routes: Routes = [
  { path: '', component: CreateMagicianComponent }
];

@NgModule({
  declarations: [CreateMagicianComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateMagicianModule { }
