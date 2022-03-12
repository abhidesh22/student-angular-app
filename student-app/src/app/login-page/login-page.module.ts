import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path:"", component: LoginPageComponent
  }
];

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    PanelModule
  ]
})
export class LoginPageModule { }
