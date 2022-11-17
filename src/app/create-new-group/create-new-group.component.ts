import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Group } from '../_models/group.model';
import { GroupsService } from '../_services/groups.service';

@Component({
  selector: 'app-create-new-group',
  templateUrl: './create-new-group.component.html',
  styleUrls: ['./create-new-group.component.css'],
})
export class CreateNewGroupComponent implements OnInit {
  group!: Group;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupsService: GroupsService
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
}
