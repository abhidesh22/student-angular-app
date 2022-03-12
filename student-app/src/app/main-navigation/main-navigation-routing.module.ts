import { LoginPageComponent } from './../login-page/login-page.component';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {MainNavigationComponent} from './main-navigation.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { StudentInfoComponent } from '../student-info/student-info.component';
import { UniversityInfoComponent } from '../university-info/university-info.component';


@NgModule({
  declarations: [],
  imports: [
		RouterModule.forChild([
			{path:'',component: MainNavigationComponent},
      {path:'login',component: LoginPageComponent},
      {path:'home',component: HomePageComponent},
      {path:'aboutpage',component: AboutPageComponent},
      {path:'studentinfo',component: StudentInfoComponent},
      {path:'universityinfo',component: UniversityInfoComponent}
		])
  ],
  exports: [
    RouterModule
  ]
})
export class MainNavigationRoutingModule { }
