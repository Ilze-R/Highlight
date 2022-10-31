import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../_common/users';
import { Role } from '../_models/role.enum';
import { User } from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  currentUser: User = new User();
  errorMessage: string = '';
  // users!: Users[];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    //   this.listUsers();

    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
    });
  }

  changeRole() {
    const newRole =
      this.currentUser.role === Role.ADMIN ? Role.USER : Role.ADMIN;

    this.userService.changeRole(newRole).subscribe(
      () => {
        // cannot update role directly, because logged user still has jwt token which also contains the role, need to logout
        this.authenticationService.logOut();
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = 'Unexpected error occured.';
        console.log(error);
      }
    );
  }

  //   listUsers() {
  //     this.UsersService.getUsersList().subscribe((data) => {
  //       this.users = data;
  //     });
  //   }
}
