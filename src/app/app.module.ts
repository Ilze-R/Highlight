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
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './_services/users.service';
import { GroupsService } from './_services/groups.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizesComponent } from './unauthorizes/unauthorizes.component';
import { DetailComponent } from './detail/detail.component';
import { authInterceptorProviders } from './_interceptors/auth.interceptor';
import { NgApexchartsModule } from 'ng-apexcharts';

import { HighlightsComponent } from './user-dashboard/highlights/highlights.component';
import { ProfileComponent } from './user-dashboard/profile/profile.component';
import { MyGroupsComponent } from './user-dashboard/my-groups/my-groups.component';
import { ChatComponent } from './user-dashboard/chat/chat.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CreateNewGroupComponent } from './create-new-group/create-new-group.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    UserDashboardComponent,
    FooterComponent,
    HowItWorksComponent,
    AdminPanelComponent,
    NotFoundComponent,
    UnauthorizesComponent,
    DetailComponent,
    HighlightsComponent,
    ProfileComponent,
    MyGroupsComponent,
    ChatComponent,
    CreateNewGroupComponent,
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
    NgApexchartsModule,
    CalendarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [UsersService, GroupsService, authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
