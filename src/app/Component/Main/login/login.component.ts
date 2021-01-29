import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UnlockAccountComponent } from 'src/app/Dialogs/unlock-account/unlock-account.component';
import { CommonService } from 'src/app/Services/common.service';
import { DataService } from '../../../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails = new FormGroup({
    psnumber: new FormControl(''),
    password: new FormControl('')
  });

  public submitDisable = false;
  public routerlink = 'Login';
  public showCart = false;
  public invalidPasswordCount = 0;
  public isLoginSussess = false;

  constructor(
    private route: Router, private dataService: DataService, private commonService: CommonService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  loginSubmit(event: any) {
    const inputModel = {
      Psno: parseInt(this.loginDetails.value.psnumber),
      Password: this.loginDetails.value.password
  }
    this.dataService.loginValidation(inputModel).subscribe(res => {
      this.submitDisable = res.lockUnlockStatus === 'L';
      this.invalidPasswordCount = res.attemptsLeft;
      this.isLoginSussess = res.statusCode;
      if(res.statusCode === 200) {
        sessionStorage.setItem('login', 'true');
        sessionStorage.setItem('roleId', res.roleId);
        sessionStorage.setItem('psno', res.psNo);
        this.route.navigate(['/Home']);
      }
      alert(res.message);
    }, error => {
      this.commonService.showConfirmationBox('Error', 'Some Error Occured, Please Try Again Later',
      (a) => {
        if(a === 'true') {
          console.log(a)
        } else {
          console.log(a)
        }
      });
      // alert('Some Error Occured, Please Try Again Later');
    } ); 
  }

  unlockAccount() {
    this.dialog.open(UnlockAccountComponent, {
      panelClass: 'mat-dialog-primary',
      data: {}
    });
  }
}
