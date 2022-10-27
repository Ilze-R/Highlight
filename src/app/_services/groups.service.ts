import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groups } from '../_common/groups';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private baseUrl = 'http://localhost:8080/api/groups';

  posts!: Observable<Groups>;

  constructor(private httpClient: HttpClient) {}

  getGroupsPaginate(
    thePage: number,
    thePageSize: number,
    theGroupsCloseStatus: boolean
  ): Observable<GetResponse> {
    const searchUrl =
      `${this.baseUrl}/search/findByClosed?closed=${theGroupsCloseStatus}` +
      `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponse>(searchUrl);
  }

  getGroupsClosedStatus(theGroupsCloseStatus: boolean): Observable<Groups[]> {
    const searchUrl = `${this.baseUrl}/search/findByClosed?closed=${theGroupsCloseStatus}`;

    return this.httpClient
      .get<GetResponse>(searchUrl)
      .pipe(map((response) => response._embedded.groups));
  }

  searchGroups(theKeyword: string): Observable<Groups[]> {
    const searchUrl = `${this.baseUrl}/search/findByGroupNameContaining?group_name=${theKeyword}`;

    return this.getGroups(searchUrl);
  }

  private getGroups(searchUrl: string): Observable<Groups[]> {
    return this.httpClient
      .get<GetResponse>(searchUrl)
      .pipe(map((response) => response._embedded.groups));
  }
}

interface GetResponse {
  _embedded: {
    groups: Groups[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
