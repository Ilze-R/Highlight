import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewHighComponent } from './new-high/new-high.component';
import { SignUpComponent } from './new-high/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { JoinComponent } from './new-high/join/join.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OpenGroupsComponent } from './open-groups/open-groups.component';
import { MotivationComponent } from './motivation/motivation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './_services/users.service';
import { GroupsService } from './_services/groups.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizesComponent } from './unauthorizes/unauthorizes.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewHighComponent,
    SignUpComponent,
    JoinComponent,
    LoginComponent,
    AboutComponent,
    OpenGroupsComponent,
    MotivationComponent,
    UserProfileComponent,
    FooterComponent,
    HowItWorksComponent,
    AdminPanelComponent,
    LoggedUserComponent,
    NotFoundComponent,
    UnauthorizesComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    FontAwesomeModule,
  ],
  providers: [UsersService, GroupsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
