import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  unlockAccount(psno) {
  const inputModel = {
    psno: parseInt(psno.value),
    lockUnlockRequest: "U" // code to unlock Account
  }
    this.dataService.lockUnlockRequest(inputModel).subscribe(res => alert(res.message));
  }
}
