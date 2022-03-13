import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { UniversityActions } from '../shared/actions';
import { Store } from '@ngrx/store';
import * as fromUniversity from '../shared/reducers/university-meta.reducer';
@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  items!: MenuItem[];

  constructor(private store: Store<fromUniversity.State>) { }

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
    this.store.dispatch(UniversityActions.loadAllUniversities());
  }

}
