import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-high',
  templateUrl: './create-high.component.html',
  styleUrls: ['./create-high.component.css'],
})
export class CreateHighComponent implements OnInit {
  createForm: any = UntypedFormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
    private fb: UntypedFormBuilder
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
      groupname: new UntypedFormControl('', Validators.required),
      username: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
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
