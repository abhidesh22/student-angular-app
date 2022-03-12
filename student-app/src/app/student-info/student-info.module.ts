import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoComponent } from './student-info.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  {
    path:"", component: StudentInfoComponent
  }
];


@NgModule({
  declarations: [
    StudentInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ButtonModule,
    DropdownModule,
    FormsModule
  ]
})
export class StudentInfoModule { }
