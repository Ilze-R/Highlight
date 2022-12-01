import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map } from 'rxjs/operators';
import { GroupsService } from '../_services/groups.service';

export function groupNameValidator(groups: GroupsService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return groups.findAll().pipe(
      map((groups) => {
        const group = groups.find(
          (group) =>
            group.groupName.toLocaleLowerCase() ==
            control.value.toLocaleLowerCase()
        );
        return group ? {nameExists:true} : null;
      })
    );
  };
}
