import { MockStudentApiService } from '../../../testing/mocks/mock-student-app-api.service';
import { async, TestBed } from '@angular/core/testing';
import { StudentApiService } from './student-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL } from '../constants/shared.constants';

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

  describe('#universityGetApi', () => {

    it('should make a GET request to university list api', async(() => {
      service.universityGetApi().subscribe();

      httpTestingController.match(req => 
        req.method === 'GET'
        && req.url === `${BASE_URL}/api/uni`
      );

      expect().nothing();
    }));
  
    it('should make a GET request to the newstories endpoint', async(() => {
      service.universityGetApi().subscribe(data => {
        expect(data).toEqual([
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
              }]
            }
        ]);
      });

      httpTestingController.match(req => 
        req.method === 'GET'
        && req.url === `${BASE_URL}/api/uni`
      );
    }));
  });

//   describe('#getSingleItem', () => {
//     let item101: Item = {
//       id: 101,
//       deleted: false,
//       type: 'story' as itemtype,
//       time: 16444322,
//       text: 'sample response',
//       kids: [301, 302, 303],
//       url: 'https://test.com',
//       by: 'abc'
//     };
//     let item201: Item = {
//       id: 201,
//       deleted: false,
//       type: 'comment' as itemtype,
//       time: 16444322,
//       text: 'sample response',
//       kids: [301, 302, 303],
//       url: 'https://test.com',
//       by: 'abc'
//     };

//     it('should return requested item details for story', async(() => {
//       service.getSingleItem(101).subscribe(data => {
//         expect(data).toEqual(item101);
//       });
//     }));

//     it('should return requested item details for comment', async(() => {
//       service.getSingleItem(201).subscribe(data => {
//         expect(data).toEqual(item201);
//       });
//     }));
//   });
  
//   describe('#getUserInfo', () => {
//     let userabc: UserInfo = {
//       about: 'test',
//       created: 1655554234,
//       id: 'abc',
//       karma: 100,
//       submitted: [101, 102, 103]
//     };

//     it('should return requested user information', async(() => {
//       service.getUserInfo('abc').subscribe(data => {
//         expect(data).toEqual(userabc);
//       });
//     }));

//     it('should return empty when user not present', async(() => {
//       service.getUserInfo('xyz').subscribe(data => {
//         expect(data).toEqual({});
//       });
//     }));
//   });
});
