import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from '../constants/shared.constants';


/**
 * This service is a shared service for the complete app to fetch different type of data through the APIs.
 */

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  constructor(private http: HttpClient) { }

/**
 * universityGetApi: This services fetches the univeristy list.
 * params : none
 * output : Observable returning the university list  
 */
  universityGetApi(): Observable<any> {
    return this.http
      .get(`${BASE_URL}/api/uni`);
  }

/**
 * getStudentsbyUniversityApi: This services fetches the students list by selected university.
 * params : university Id
 * output : Observable returning the student list  
 */
  getStudentsbyUniversityApi(universityId: string): Observable<any> {
    return this.http
      .get(`${BASE_URL}/api/student/byuni/${universityId}`);
  }

/**
 * getGradesbySubjectApi: This services fetches the average grade for students per course for selected university.
 * params : university Id
 * output : Observable returning the grades data
 */
  getGradesbySubjectsApi(universityId: string): Observable<any> {
    return this.http
      .get(`${BASE_URL}/api/student/bysubject/${universityId}`);
  }

}
