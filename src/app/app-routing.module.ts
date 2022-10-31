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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizesComponent } from './unauthorizes/unauthorizes.component';

const routes: Routes = [
  { path: 'home', component: NewHighComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'join', component: JoinComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: LoggedUserComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '404', component: NotFoundComponent },
  { path: '401', component: UnauthorizesComponent },
  { path: 'open-groups/:closed', component: OpenGroupsComponent },
  { path: 'groups/searh/:closed/:strict', component: OpenGroupsComponent },
  { path: 'search/:keyword', component: OpenGroupsComponent },

  { path: 'open-groups', component: OpenGroupsComponent },
  { path: 'motivation', component: MotivationComponent },
  { path: 'user-profile', component: UserProfileComponent },
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
