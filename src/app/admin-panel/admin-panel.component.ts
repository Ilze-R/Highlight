import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user.model';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  userList: Array<User> = [];

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.adminService.findAllUsers().subscribe((data) => {
      this.userList = data;
    });
  }
  detail(user: User) {
    this.router.navigate(['/detail', user.id], { state: user });
  }
}
