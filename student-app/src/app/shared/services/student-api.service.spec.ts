import { UserInfo } from '../models/user-info';
import { Item } from '../models/item-info';
import { MockStudentApiService } from '../../../testing/mocks/mock-student-app-api.service';
import { async, TestBed } from '@angular/core/testing';
import { StudentApiService } from './student-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL } from '../constants/shared.constants';
import { itemtype } from '../models/item-types';

describe('StudentApiService', () => {
  let service: StudentApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: StudentApiService, useClass: MockStudentApiService }],
    });
    service = TestBed.inject(StudentApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#universalGetApi', () => {

    it('should make a GET request to the topstories endpoint', async(() => {
      service.universalGetApi('topstories').subscribe();

      httpTestingController.match(req => 
        req.method === 'GET'
        && req.url === `${BASE_URL}/topstories.json`
      );

      expect().nothing();
    }));
  
    it('should make a GET request to the newstories endpoint', async(() => {
      service.universalGetApi('newstories').subscribe();

      httpTestingController.match(req =>
        req.method === 'GET'
        && req.url === `${BASE_URL}/newstories.json`
      );

      expect().nothing();
    }));

    it('should return requested topstories response with ids array', async(() => {
      service.universalGetApi('topstories').subscribe(data => {
        expect(data).toEqual([ 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110 ]);
      });

      httpTestingController
        .match(req => req.url === `${BASE_URL}/topstories.json`);
    }));

    it('should return requested newstories response with ids array', async(() => {
      service.universalGetApi('newstories').subscribe(data => {
        expect(data).toEqual([ 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210 ]);
      });

      httpTestingController
        .match(req => req.url === `${BASE_URL}/newstories.json`);
    }));

  });

  describe('#getSingleItem', () => {
    let item101: Item = {
      id: 101,
      deleted: false,
      type: 'story' as itemtype,
      time: 16444322,
      text: 'sample response',
      kids: [301, 302, 303],
      url: 'https://test.com',
      by: 'abc'
    };
    let item201: Item = {
      id: 201,
      deleted: false,
      type: 'comment' as itemtype,
      time: 16444322,
      text: 'sample response',
      kids: [301, 302, 303],
      url: 'https://test.com',
      by: 'abc'
    };

    it('should return requested item details for story', async(() => {
      service.getSingleItem(101).subscribe(data => {
        expect(data).toEqual(item101);
      });
    }));

    it('should return requested item details for comment', async(() => {
      service.getSingleItem(201).subscribe(data => {
        expect(data).toEqual(item201);
      });
    }));
  });
  
  describe('#getUserInfo', () => {
    let userabc: UserInfo = {
      about: 'test',
      created: 1655554234,
      id: 'abc',
      karma: 100,
      submitted: [101, 102, 103]
    };

    it('should return requested user information', async(() => {
      service.getUserInfo('abc').subscribe(data => {
        expect(data).toEqual(userabc);
      });
    }));

    it('should return empty when user not present', async(() => {
      service.getUserInfo('xyz').subscribe(data => {
        expect(data).toEqual({});
      });
    }));
  });
});
