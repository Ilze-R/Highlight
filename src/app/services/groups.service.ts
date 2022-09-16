import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groups } from '../common/groups';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private baseUrl = 'http://localhost:8080/api/groups';
  
  private csUrl =
    'http://http://localhost:8080/api/groups/search/findByStrictAndClosed?closed=false&strict=true';

  posts!: Observable<Groups>;

  constructor(private httpClient: HttpClient) {}

  getCloStr(): Observable<Groups[]> {
    return this.httpClient.get<Groups[]>(`${this.csUrl}`);
  }

  getGroupsClosedStatus(theGroupsCloseStatus: boolean): Observable<Groups[]> {
    const searchUrl = `${this.baseUrl}/search/findByClosed?closed=${theGroupsCloseStatus}`;

    return this.httpClient
      .get<GetResponse>(searchUrl)
      .pipe(map((response) => response._embedded.groups));
  }

  getGroupsStrictStatus(theGroupsStrictStatus: boolean): Observable<Groups[]> {
    const strictUrl = `${this.baseUrl}/search/findByStrict?strict=${theGroupsStrictStatus}`;

    return this.httpClient
      .get<GetResponse>(strictUrl)
      .pipe(map((response) => response._embedded.groups));
  }

  searchGroups(theKeyword: string): Observable<Groups[]> {
    const searchUrl = `${this.baseUrl}/search/findByGroupNameContaining?group_name=${theKeyword}`;

    return this.getGroups(searchUrl);
  }

  getGroupsStrictClosedStatus(
    theGroupClosedStatus: string,
    theGroupStrictStatus: string
  ): Observable<Groups[]> {
    const strictClosedUrl = `${this.baseUrl}/search/findByStrictAndClosed?closed=${theGroupClosedStatus}&strict=${theGroupStrictStatus}`;

    return this.httpClient
      .get<GetResponse>(strictClosedUrl)
      .pipe(map((response) => response._embedded.groups));
  }

  private getGroups(searchUrl: string): Observable<Groups[]> {
    return this.httpClient
      .get<GetResponse>(searchUrl)
      .pipe(map((response) => response._embedded.groups));
  }
}

interface GetResponseGroups {
  _embedded: {
    groups: Groups[];
  };
}

interface GetResponse {
  _embedded: {
    groups: Groups[];
  };
}
