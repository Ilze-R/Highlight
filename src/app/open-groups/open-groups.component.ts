import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Groups } from '../common/groups';
import { GroupsService } from '../services/groups.service';

@Component({
  selector: 'app-open-groups',
  templateUrl: './open-groups.component.html',
  styleUrls: ['./open-groups.component.css'],
})
export class OpenGroupsComponent implements OnInit {
  groups!: Groups[];
  currentGroupsClosedStatus!: boolean;
  searchMode!: boolean;
  strictButton: boolean = true;

  constructor(
    private groupsService: GroupsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listGroups();
    });
  }

  listGroups() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchGroups();
    } else {
      this.handleListGroups();
    }
  }

  /**
   * strict - non-strict button name change
   */

  onStrictClick() {
    this.strictButton = !this.strictButton;
  }

  /**
   * main search
   */

  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }

  handleSearchGroups() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this.groupsService.searchGroups(theKeyword).subscribe((data) => {
      this.groups = data;
    });
  }

  /**
   * starter list display
   */

  handleListGroups() {
    const hasGroupsClosedStatus: boolean =
      this.route.snapshot.paramMap.has('closed');

    if (hasGroupsClosedStatus) {
      this.currentGroupsClosedStatus =
        !this.route.snapshot.paramMap.get('closed');
    } else {
      this.currentGroupsClosedStatus = false;
    }

    this.groupsService
      .getGroupsClosedStatus(this.currentGroupsClosedStatus)
      .subscribe((data) => {
        this.groups = data;
      });
  }
}
