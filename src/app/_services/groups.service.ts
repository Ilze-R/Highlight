import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
// import { Groups } from '../_common/groups';
import {Group} from '../_models/group.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private baseUrl = `${environment.BASE_URL}/api/groups`;
  private groupsUrl!: string;
  posts!: Observable<Group>;

  constructor(private httpClient: HttpClient) {
    this.groupsUrl = `${this.baseUrl}/all-groups`;
  }

  public findAll(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(this.groupsUrl);
  }

  public save(group: Group){
    return this.httpClient.post<Group>(this.groupsUrl, group);
  }

  //   getGroupsPaginate(
  //     thePage: number,
  //     thePageSize: number,
  //     theGroupsCloseStatus: boolean
  //   ): Observable<GetResponse> {
  //     const searchUrl =
  //       `${this.baseUrl}/search/findByOpen?open=${theGroupsCloseStatus}` +
  //       `&page=${thePage}&size=${thePageSize}`;
  //     return this.httpClient.get<GetResponse>(searchUrl);
  //   }

  //   getGroupsClosedStatus(theGroupsCloseStatus: boolean): Observable<Group[]> {
  //     const searchUrl = `${this.baseUrl}/search/findByOpen?open=${theGroupsCloseStatus}`;
  //     return this.httpClient
  //       .get<GetResponse>(searchUrl)
  //       .pipe(map((response) => response._embedded.groups));
  //   }

  //   searchGroups(theKeyword: string): Observable<Group[]> {
  //     const searchUrl = `${this.baseUrl}/search/findByGroupNameContaining?group_name=${theKeyword}`;
  //     return this.getGroups(searchUrl);
  //   }

  //   private getGroups(searchUrl: string): Observable<Group[]> {
  //     return this.httpClient
  //       .get<GetResponse>(searchUrl)
  //       .pipe(map((response) => response._embedded.groups));
  //   }
  // }
  // interface GetResponse {
  //   _embedded: {
  //     groups: Group[];
  //   };
  //   page: {
  //     size: number;
  //     totalElements: number;
  //     totalPages: number;
  //     number: number;
  //   };
}
