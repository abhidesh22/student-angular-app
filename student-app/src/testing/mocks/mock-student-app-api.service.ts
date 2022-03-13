import { StudentApiService } from '../../app/shared/services/student-api.service';
import { Injectable } from '@angular/core';
import { Observable, of, asyncScheduler } from 'rxjs';


@Injectable()
export class MockStudentApiService extends StudentApiService {
  constructor() {
    super(null);
  }

  override universityGetApi(): Observable<any> {
    return of<any>(
      [
        {
          _id: "6224974d945bdd73dfa24073",
          name: "Concordia",
          courses: [
            {
              _id: "62249644ef8192b8933ab8a8",
              name: "Maths",
              type: "Science",
              subjects: [
                "subject1",
                "subject2",
                "subject3"
              ],
              createdAt: "2022-03-06T11:08:52.396Z",
              updatedAt: "2022-03-06T11:08:52.396Z",
              __v: 0
            }
          ]
        }
      ], asyncScheduler
    );
  }
}