import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-high',
  templateUrl: './create-high.component.html',
  styleUrls: ['./create-high.component.css'],
})
export class CreateHighComponent implements OnInit {
  createForm: any = FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
    private fb: FormBuilder
  ) {}
  /*constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.createForm = fb.group({
      groupname: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
    });
  }*/

  ngOnInit(): void {
    this.createForm = this.fb.group({
      groupname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onCreate() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  onSubmit(data: any) {
    //this.userService.addUser(this.createForm.value);
    console.log(data);
  }

  /*private initForm() {
    this.createForm = new FormGroup({
      groupname: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }*/
}
