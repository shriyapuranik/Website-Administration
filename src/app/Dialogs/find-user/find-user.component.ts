import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { userData } from 'src/app/Model/inputData';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {

  userData = [];

  userDetails = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dataService: DataService) {
    this.userDetails = data.userDetails
   }

  ngOnInit(): void {
  }

  onSearch(psno) {
    const inputModel = {
      PSNO: parseInt(psno)
    }
    this.dataService.getDetails(inputModel).subscribe(res => 
      this.userData = res
    );
    this.userData = userData;
  }

}
