import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from 'src/app/_models/user.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  // faUser = faUserCircle;
  errorMessage: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue?.id) {
      this.router.navigate(['/profile']);
    }
  }

  login() {
    this.authenticationService.login(this.user).subscribe(
      (data) => {
        this.router.navigate(['/profile']);
      },
      (error) => {
        this.errorMessage = 'Username or password is incorrect.';
        console.log(error);
      }
    );
  }

  // login(loginForm: NgForm) {
  //   // console.log(loginForm.value);
  //   this.userService.login(loginForm.value).subscribe(
  //     (response: any) => {
  //       // console.log(response);
  //       // console.log(response.jwtToken);
  //       // console.log(response.user.role);

  //       this.userAuthService.setRoles(response.user.role);
  //       this.userAuthService.setToken(response.jwtToken);

  //       const role = response.user.role[0].roleName;
  //       if (role === 'Admin') {
  //         this.router.navigate(['/admin']);
  //       } else {
  //         this.router.navigate(['/logged-user']);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
