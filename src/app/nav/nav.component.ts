import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { User } from 'src/app/_models/user.model';
import { Role } from 'src/app/_models/role.enum';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  ngOnInit(): void {}

  currentUser: User = new User();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
    });
  }

  isAdmin() {
    return this.currentUser?.role === Role.ADMIN;
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/home']);
  }

  // logIn(){
  //   this.authenticationService.l
  // }

  // public isLoggedIn() {
  //   return this.userAuthService.isLoggedIn();
  // }

  isLoggedIn() {
    return this.currentUser;
  }

  // public logOut() {
  //   this.userAuthService.clear();
  //   this.router.navigate(['/home']);
  // }
}
