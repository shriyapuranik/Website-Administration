import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  lockAccount() {
    const inputModel = {
      psno: sessionStorage.getItem("psno"),
      lockUnlockStatus: "U", // code to unlock Account
      roleId: sessionStorage.getItem("roleId")
  }
    this.dataService.lockUnlockApprove(inputModel).subscribe(res => alert(res.message));
  }

}
