import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewHighComponent } from './new-high/new-high.component';
import { CreateHighComponent } from './new-high/create-high/create-high.component';
import { AppRoutingModule } from './app-routing.module';
import { JoinComponent } from './new-high/join/join.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OpenGroupsComponent } from './open-groups/open-groups.component';
import { MotivationComponent } from './motivation/motivation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoggedInNavComponent } from './nav/logged-in-nav/logged-in-nav.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { GroupsService } from './services/groups.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewHighComponent,
    CreateHighComponent,
    JoinComponent,
    LoginComponent,
    AboutComponent,
    OpenGroupsComponent,
    MotivationComponent,
    UserProfileComponent,
    LoggedInNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UsersService, GroupsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
