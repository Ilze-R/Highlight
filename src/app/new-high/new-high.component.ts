import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-new-high',
  templateUrl: './new-high.component.html',
  styleUrls: ['./new-high.component.css'],
})
export class NewHighComponent implements OnInit {
  currentUser: User = new User();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
    });
  }

  ngOnInit(): void {}
}
