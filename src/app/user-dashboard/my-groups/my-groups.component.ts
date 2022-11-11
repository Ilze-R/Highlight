import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css'],
})
export class MyGroupsComponent implements OnInit {
  currentUser: User = new User();

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
    });
  }
}
