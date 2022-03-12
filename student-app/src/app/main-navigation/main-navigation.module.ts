import { MainNavigationRoutingModule } from './main-navigation-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainNavigationComponent} from './main-navigation.component';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainNavigationComponent
  ],
  imports: [
    CommonModule,
    MainNavigationRoutingModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    RouterModule
  ],
  exports: [
    MainNavigationComponent
  ]
})
export class MainNavigationModule { }
