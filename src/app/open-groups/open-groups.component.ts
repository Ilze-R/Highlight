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
  currentStrictStatus!: string;
  currentClosedStatus!: string;
  theGroupClosedStatus!: boolean;
  theGroupStrictStatus!: boolean;

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

  onStrictClick() {
    this.strictButton = !this.strictButton;
  }

  handleStrict() {
    const hasGroupStrictStatus: boolean = this.route.snapshot.paramMap.has(
      'strict'
    );
    const hasGroupClosedStatus: boolean = this.route.snapshot.paramMap.has(
      'closed'
    );

    if (
      this.strictButton === true &&
      hasGroupClosedStatus &&
      hasGroupStrictStatus
    ) {
      this.theGroupStrictStatus = !this.route.snapshot.paramMap.get('strict');
      this.theGroupClosedStatus = !this.route.snapshot.paramMap.get('closed');
    } else {
      this.theGroupClosedStatus = false;
      this.theGroupStrictStatus = !this.route.snapshot.paramMap.get('strict');
    }

    /*this.groupsService
      .getGroupsStrictClosedStatus(
        this.theGroupClosedStatus,
        this.theGroupStrictStatus
      )
      .subscribe((data) => {
        this.groups = data;
      });*/
  }

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

  handleListGroups() {
    const hasGroupsClosedStatus: boolean = this.route.snapshot.paramMap.has(
      'closed'
    );

    if (hasGroupsClosedStatus) {
      this.currentGroupsClosedStatus = !this.route.snapshot.paramMap.get(
        'closed'
      );
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
