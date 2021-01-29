import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  CreateGroupDetails = new FormGroup({
    groupid: new FormControl(''),
    groupname: new FormControl(''),
    ItimeApproval: new FormControl(''),
    IrequestApproval: new FormControl(''),
    LTASubmission: new FormControl(''),
  });
  constructor(public dataService: DataService, private dialogRef: MatDialogRef<CreateGroupComponent>) {
    // dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  CreateGroupSubmit(CreateGroupDetails) {
    const inputModel = {
      GroupId: CreateGroupDetails.groupid,
      GroupName: CreateGroupDetails.groupname,
      IRequestApproval: CreateGroupDetails.IrequestApproval,
      ITimeApproval: CreateGroupDetails.ItimeApproval,
      LTASubmittion: CreateGroupDetails.LTASubmission
    }
    this.dataService.createGroup(inputModel).subscribe(res => {
      if (res.StatusCode === 201) {
        // this.dialogRef.disableClose = false;
        this.dialogRef.close();
        alert(res.message);
      }

    });
  }

}
