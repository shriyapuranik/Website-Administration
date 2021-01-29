import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-display-user-info',
  templateUrl: './display-user-info.component.html',
  styleUrls: ['./display-user-info.component.css']
})
export class DisplayUserInfoComponent implements OnInit {

  Details = {
    name: 'name',
    permission1: 'yes',
    permission2: 'yes',
    permission3: 'yes',
  }

  userData = {};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    const inputModel = {
      PSNO: parseInt(sessionStorage.getItem('psno'))
    }
    this.dataService.getDetails(inputModel).subscribe(res => 
      this.userData = res[0]
    );
  }

}
