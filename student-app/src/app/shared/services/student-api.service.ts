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
 * universalGetApi: This function is a generic one which fetch any type of data list like stories, ask, post, etc.
 * params : type -> type of the item list that needs to be fetched
 * output : Observable returning the item list  
 */

  universalGetApi(type: string): Observable<any> {
    return this.http
      .get(`${BASE_URL}/${type}.json`);
  }

  universityGetApi(): Observable<any> {
    return this.http
      .get(`${BASE_URL}/api/uni`);
  }

  getStudentsbyUniversityApi(universityId: string): Observable<any> {
    return this.http
      .get(`${BASE_URL}/api/student/byuni/${universityId}`);
  }

  getStudentsbySubjectsApi(universityId: string): Observable<any> {
    return this.http
      .get(`${BASE_URL}/api/student/bysubject/${universityId}`);
  }

/**
 * getSingleItem: This function is gets the details of a single item.
 * params : id -> Item Id
 * output : Observable returning the item details  
 */

  getSingleItem(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/item/${id}.json`);
  }


/**
 * getUserInfo: This function is gets the details of the user.
 * params : id -> User Id
 * output : Observable returning the User details  
 */

  getUserInfo(id: string): Observable<any> {
    return this.http.get(`${BASE_URL}/user/${id}.json`);
  }

}
