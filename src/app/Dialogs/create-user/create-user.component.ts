import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  regDetails = this.fb.group({
    name: ['name', Validators.required],
    email: ['name@mail.com', Validators.email],
    // password: ['******', [Validators.required, Validators.minLength(8)]],
    phonenumber: ['0000000000', Validators.required]
  });

  constructor(public dialogRef: MatDialogRef<CreateUserComponent>, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit(data: any, data1: any) {
    
  }
}
