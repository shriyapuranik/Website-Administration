import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from 'src/app/Dialogs/create-user/create-user.component';
import { FindUserComponent } from 'src/app/Dialogs/find-user/find-user.component';
import { userData } from 'src/app/Model/inputData';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  userDetails = [
    { fieldName: 'psno', title: 'PS No' },
    { fieldName: 'employeeName', title: 'Name' },
    { fieldName: 'itimeApproval', title: 'ITime Approval' },
    { fieldName: 'irequestApproval', title: 'IRequest Approval' },
    { fieldName: 'ltasubmittion', title: 'LTA Submission' },
  ]

  userData = [];

  constructor(public dialog: MatDialog, public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUserDetailsUsersTab().subscribe(res => 
      this.userData = res
    );
  }

  onFindUserClick() {
    debugger;
    this.dialog.open(FindUserComponent, {
      panelClass: 'mat-dialog-primary',
      data: {
        userDetails: this.userDetails
      }
    });
  }

  onCreateUSerClick() {
    this.dialog.open(CreateUserComponent, {
      panelClass: 'mat-dialog-primary',
      data: {}
    });
  }

  onLockUnlockClick($event) {
    const inputModel = {
      psno: $event.psno,
      lockUnlockStatus: $event.lockUnlockRequest,
      roleId: sessionStorage.getItem("roleId")
  }
    this.dataService.lockUnlockApprove(inputModel).subscribe(res => alert(res.message));
  }
}
