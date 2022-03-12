import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label:'about',
          icon:'pi pi-fw pi-ellipsis-v',
          routerLink: "/aboutpage"
      },
      {
          label:'Student Info',
          icon:'pi pi-fw pi-ellipsis-v',
          routerLink: "/studentinfo"
      },
      {
          label:'Universities',
          icon:'pi pi-fw pi-ellipsis-v',
          routerLink: "/universityinfo"
      }
  ];
  }

}
