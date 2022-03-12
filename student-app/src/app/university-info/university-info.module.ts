import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityInfoComponent } from './university-info.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path:"", component: UniversityInfoComponent
  }
];

@NgModule({
  declarations: [
    UniversityInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ButtonModule
  ]
})
export class UniversityInfoModule { }
