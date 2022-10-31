import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../_common/users';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  // users!: Users[];

  // constructor(private UsersService: UsersService) {}

  ngOnInit() {
    //   this.listUsers();
  }

  //   listUsers() {
  //     this.UsersService.getUsersList().subscribe((data) => {
  //       this.users = data;
  //     });
  //   }
}
