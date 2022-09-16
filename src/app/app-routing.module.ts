import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHighComponent } from './new-high/create-high/create-high.component';
import { NewHighComponent } from './new-high/new-high.component';
import { NavComponent } from './nav/nav.component';
import { JoinComponent } from './new-high/join/join.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OpenGroupsComponent } from './open-groups/open-groups.component';
import { MotivationComponent } from './motivation/motivation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'home', component: NewHighComponent },
  { path: 'create', component: CreateHighComponent },
  { path: 'join', component: JoinComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
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
export class AppRoutingModule {}
