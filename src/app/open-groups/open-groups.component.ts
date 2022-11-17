import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { Groups } from '../_common/groups';
import { Group } from '../_models/group.model';
import { GroupsService } from '../_services/groups.service';

@Component({
  selector: 'app-open-groups',
  templateUrl: './open-groups.component.html',
  styleUrls: ['./open-groups.component.css'],
})
export class OpenGroupsComponent implements OnInit {
  groups!: Group[];
  currentGroupsClosedStatus!: boolean;
  searchMode!: boolean;
  strictButton: boolean = true;

  // properties for pagination
  thePageNumber: number = 0;
  thePageSize: number = 10;
  theTotalElements: number = 20;

  constructor(
    private groupsService: GroupsService
  ) // private route: ActivatedRoute,
  // private router: Router
  {}

  ngOnInit() {
    this.groupsService.findAll().subscribe((data) => {
      this.groups = data;
    });
    // this.route.paramMap.subscribe(() => {
    //   this.listGroups();
    // });
  }

  // listGroups() {
  //   this.searchMode = this.route.snapshot.paramMap.has('keyword');

  //   if (this.searchMode) {
  //     this.handleSearchGroups();
  //   } else {
  //     this.handleListGroups();
  //   }
  // }

  // /**
  //  * strict - non-strict button name change
  //  */

  // onStrictClick() {
  //   this.strictButton = !this.strictButton;
  // }

  // /**
  //  * main search
  //  */

  // doSearch(value: string) {
  //   console.log(`value=${value}`);
  //   this.router.navigateByUrl(`/search/${value}`);
  // }

  // handleSearchGroups() {
  //   const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

  //   this.groupsService.searchGroups(theKeyword).subscribe((data) => {
  //     this.groups = data;
  //   });
  // }

  // /**
  //  * starter list display
  //  */

  // handleListGroups() {
  //   const hasGroupsClosedStatus: boolean =
  //     this.route.snapshot.paramMap.has('open');

  //   if (hasGroupsClosedStatus) {
  //     this.currentGroupsClosedStatus =
  //       !this.route.snapshot.paramMap.get('open');
  //   } else {
  //     this.currentGroupsClosedStatus = false;
  //   }

  //   //Check if we have a different

  //   this.groupsService
  //     .getGroupsPaginate(
  //       this.thePageNumber - 1,
  //       this.thePageSize,
  //       this.currentGroupsClosedStatus
  //     )
  //     .subscribe((data) => {
  //       this.groups = data._embedded.groups;
  //       this.thePageNumber = data.page.number + 1;
  //       this.thePageSize = data.page.size;
  //       this.theTotalElements = data.page.totalElements;
  //     });
  // }
}
