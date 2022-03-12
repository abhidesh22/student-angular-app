import { StudentApiService } from '../../app/shared/services/student-api.service';
import { Injectable } from '@angular/core';
import { Observable, of, asyncScheduler } from 'rxjs';
import { itemtype } from 'src/app/shared/models/item-types';


@Injectable()
export class MockStudentApiService extends StudentApiService {
  constructor() {
    super(null);
  }

  override universalGetApi(type: string): Observable<any> {
      if(type === 'topstories') {
        return of<any>(
            [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110], asyncScheduler);
      } else {
          if(type === 'newstories') {
            return of<any>(
                [200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], asyncScheduler);
          } else {
              return of<any>(
                [], asyncScheduler);
          }
      }
  }

  override getSingleItem(id: number): Observable<any> {
    if(id === 101) {
      return of<any>({
        id: 101,
        deleted: false,
        type: 'story' as itemtype,
        time: 16444322,
        text: 'sample response',
        kids: [301, 302, 303],
        url: 'https://test.com',
        by: 'abc'
      }, asyncScheduler);
    } else {
        if(id === 201) {
            return of<any>({
                id: 201,
                deleted: false,
                type: 'comment' as itemtype,
                time: 16444322,
                text: 'sample response',
                kids: [301, 302, 303],
                url: 'https://test.com',
                by: 'abc'
              }, asyncScheduler);
        } else {
            return of<any>(
              {}, asyncScheduler);
        }
    }
  }

  override getUserInfo(id: string): Observable<any> {
    if(id === 'abc') {
      return of<any>({
        about: 'test',
        created: 1655554234,
        id: 'abc',
        karma: 100,
        submitted: [101, 102, 103]
      }, asyncScheduler);
    } else {
        return of<any>(
            {}, asyncScheduler);
    }
  }
}
