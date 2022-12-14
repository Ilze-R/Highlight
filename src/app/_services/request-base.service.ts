import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user.model';
import { AuthenticationService } from './authentication.service';

export abstract class RequestBaseService {
  protected currentUser: User = new User();

  protected constructor(
    protected authenticationService: AuthenticationService,
    protected http: HttpClient
  ) {
    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
    });
  }

  get getHeaders(): HttpHeaders {
    return new HttpHeaders({
      authorization: 'Bearer ' + this.currentUser?.accessToken,
      'Content-Type': 'application/json; charset=UTF-8',
    });
  }
}
