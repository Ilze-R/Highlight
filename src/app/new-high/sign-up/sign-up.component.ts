import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/_models/user.model';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  faUser = faUserCircle;
  errorMessage: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue?.id) {
      this.router.navigate(['/profile']);
    }
  }

  register() {
    this.authenticationService.register(this.user).subscribe(
      (data) => {
        this.router.navigate(['/profile']);
      },
      (err) => {
        if (err?.status === 409) {
          this.errorMessage = 'Username already exist.';
        } else {
          this.errorMessage = 'Unexpected error occured.';
          console.log(err);
        }
      }
    );
  }
}
