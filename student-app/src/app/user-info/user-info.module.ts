import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
//import { ConvertTimePipe } from '../shared/pipes/convert-time.pipe';

const routes: Routes = [
  {
    path: ':userId', component: UserInfoComponent
  }
];

@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ButtonModule
  ]
})
export class UserInfoModule { }
