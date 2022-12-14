import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  user: User = new User();

  constructor(private router: Router) {
    this.user = Object.assign(
      new User(),
      this.router.getCurrentNavigation()?.extras.state
    );
  }

  ngOnInit(): void {}
}
