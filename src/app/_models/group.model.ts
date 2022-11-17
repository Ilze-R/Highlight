export class Group {
  id: number | undefined;
  size: number | undefined;
  groupName: string = '';
  // strict: boolean = true;
  // open: boolean = true;
  strict!: boolean;
  open!: boolean;
  description: string = '';
}
