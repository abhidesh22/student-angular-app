import { UserInfo } from './../shared/models/user-info';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentApiService } from '../shared/services/student-api.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  isLoading: boolean = false;

  userId!: string;
  userDetails!: UserInfo;
  userCreatedDate!: string;
  routeSubscription!: Subscription;
  userSubscription!: Subscription;

  constructor(private route: ActivatedRoute,
    private studentAppApiService: StudentApiService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
      this.userSubscription = this.studentAppApiService.getUserInfo(this.userId)
      .subscribe((data: UserInfo) => {
        this.userDetails = data;
        this.userCreatedDate = new Date(data.created * 1000).toLocaleString();
      });
    });
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }
}
