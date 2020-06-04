import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateMagicianComponent } from './create-magician.component';


const routes: Routes = [
  { path: '', component: CreateMagicianComponent }
];

@NgModule({
  declarations: [CreateMagicianComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateMagicianModule { }
