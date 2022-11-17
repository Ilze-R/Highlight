import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './new-high/sign-up/sign-up.component';
import { NewHighComponent } from './new-high/new-high.component';
import { NavComponent } from './nav/nav.component';
import { JoinComponent } from './new-high/join/join.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OpenGroupsComponent } from './open-groups/open-groups.component';
import { MotivationComponent } from './motivation/motivation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizesComponent } from './unauthorizes/unauthorizes.component';
import { AuthGuard } from './_guards/auth.guard';
import { Role } from './_models/role.enum';
import { HighlightsComponent } from './user-dashboard/highlights/highlights.component';
import { ProfileComponent } from './user-dashboard/profile/profile.component';
import { MyGroupsComponent } from './user-dashboard/my-groups/my-groups.component';
import { ChatComponent } from './user-dashboard/chat/chat.component';
import { CreateNewGroupComponent } from './create-new-group/create-new-group.component';

const routes: Routes = [
  { path: 'home', component: NewHighComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'join', component: JoinComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'profile',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.USER] },
  },
  { path: 'profile/home', component: UserDashboardComponent },
  { path: 'profile/highlights', component: HighlightsComponent },
  { path: 'profile/profile', component: ProfileComponent },
  { path: 'profile/my-groups', component: MyGroupsComponent },
  { path: 'profile/chat', component: ChatComponent },
  { path: 'profile/create', component: CreateNewGroupComponent },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },
  { path: '404', component: NotFoundComponent },
  { path: '401', component: UnauthorizesComponent },
  { path: 'groups', component: OpenGroupsComponent },
  { path: 'open-groups/:open', component: OpenGroupsComponent },
  { path: 'groups/searh/:open/:strict', component: OpenGroupsComponent },
  { path: 'search/:keyword', component: OpenGroupsComponent },

  { path: 'motivation', component: MotivationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    };
  }
}
