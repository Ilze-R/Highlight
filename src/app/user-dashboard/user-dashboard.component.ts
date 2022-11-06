import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../_common/users';
import { Role } from '../_models/role.enum';
import { User } from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import {
  faHouse,
  faDiagramProject,
  faListCheck,
  faTableColumns,
  faUsers,
  faUser,
  faFileInvoice,
  faGears,
  faBars,
  faMagnifyingGlass,
  faMessage,
  faBell,
  faCoins,
  faCampground,
} from '@fortawesome/free-solid-svg-icons';
// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexTitleSubtitle,
// } from 'ng-apexcharts';

import * as apex from 'ng-apexcharts';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})

// Warning: /Users/i/Desktop/angular/highlight/03-frontend/node_modules/ng-apexcharts/fesm2020/ng-apexcharts.mjs depends on 'apexcharts'. CommonJS or AMD dependencies can cause optimization bailouts.
// For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies
export class UserDashboardComponent implements OnInit {
  series!: apex.ApexAxisChartSeries;
  chart!: apex.ApexChart;
  xaxis!: apex.ApexXAxis;
  stroke!: apex.ApexStroke;
  markers!: apex.ApexMarkers;
  grid!: apex.ApexGrid;

  currentUser: User = new User();
  errorMessage: string = '';

  faHouse = faHouse;
  faDiagramProject = faDiagramProject;
  faListCheck = faListCheck;
  faTableColumns = faTableColumns;
  faUsers = faUsers;
  faUser = faUser;
  faFileInvoice = faFileInvoice;
  faGears = faGears;
  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;
  faMessage = faMessage;
  faBell = faBell;
  faCoins = faCoins;
  faCampground = faCampground;

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
    this.initializeChartOptions();
  }

  private initializeChartOptions(): void {
    this.chart = {
      type: 'line',
      height: '280px',
      fontFamily: 'Lato',
      toolbar: {
        show: false,
      },
    };

    this.stroke = {
      curve: 'smooth',
      width: 8,
      colors: ['#6E00FF'],
    };

    this.markers = {
      size: 7,
      colors: ['#6E00FF'],
    };

    this.grid = {
      strokeDashArray: 10,
    };
    this.series = [
      {
        name: 'engagement',
        data: [5, 3, 10, 8, 29, 19, 22, 8],
      },
    ];
    this.xaxis = {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    };

    // var chart = new ApexCharts(document.querySelector("#chart"), options);

    // chart.render();
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
