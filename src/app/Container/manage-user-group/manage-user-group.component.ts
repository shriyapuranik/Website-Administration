import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateGroupComponent } from 'src/app/Dialogs/create-group/create-group.component';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-manage-user-group',
  templateUrl: './manage-user-group.component.html',
  styleUrls: ['./manage-user-group.component.css']
})
export class ManageUserGroupComponent implements OnInit {

  groupDetails = [
    { fieldName: 'groupId', title: 'Group ID' },
    { fieldName: 'groupName', title: 'Group Name' },
    { fieldName: 'itimeApproval', title: 'ITime Permission' },
    { fieldName: 'irequestApproval', title: 'IRequest Permission' },
    { fieldName: 'ltasubmittion', title: 'LTA' },
  ]
  groupData = [];
  constructor(public dialog: MatDialog, public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.listGroupDetails().subscribe(res => {
      this.groupData = res
    });
  }

  onCreateGroupClick() {
    this.dialog.open(CreateGroupComponent, {
      panelClass: 'mat-dialog-primary',
      data: {}
    });
  }

  onDeleteClick($event) {
    const inputModel = {
      groupId: $event.groupId
    }
    this.dataService.deleteGroup(inputModel).subscribe(res => {
      alert(res);
    });
  }

}
