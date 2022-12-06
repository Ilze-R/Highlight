import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Group } from '../_models/group.model';
import { GroupsService } from '../_services/groups.service';
import { groupNameValidator } from '../_validators/group-name.validator';

@Component({
  selector: 'app-create-new-group',
  templateUrl: './create-new-group.component.html',
  styleUrls: ['./create-new-group.component.css'],
})
export class CreateNewGroupComponent implements OnInit {
  value = 'Clear me';
  group!: Group;

  // groupName = new FormControl('', {
  //   validators: [Validators.required, Validators.minLength(3)],
  //   updateOn: 'blur',
  // });
  // description = new FormControl('');

  // form = new FormGroup({
  //   groupName: this.groupName,
  //   description: this.description,
  // });

  form = this.fb.group({
    groupName: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
        asyncValidators: [groupNameValidator(this.groupsService)],
        updateOn: 'blur',
      },
    ],
    description: [
      '',
      {
        validators: [
          Validators.required,
          Validators.maxLength(6),
          Validators.maxLength(300),
        ],
      },
    ],
    descrioption: ['', [Validators.required, Validators.minLength(3)]],
    groupSize: ['', Validators.required],
    openOrClosed: ['open', Validators.required],
    strictOrNon: ['strict', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupsService: GroupsService,
    private fb: FormBuilder
  ) {
    this.group = new Group();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.groupsService
      .save(this.group)
      .subscribe((result) => this.goToGroupsList());
  }

  goToGroupsList() {
    this.router.navigate(['/profile']);
  }

  get getGroupName() {
    return this.form.controls['groupName'];
  }
}
