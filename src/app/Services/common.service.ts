import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationBoxComponent } from '../Component/Common/confirmation-box/confirmation-box.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public dialog: MatDialog) { }

  showConfirmationBox(
    title: 'Success' | 'Error' | 'Information' | 'Warning',
    message: string,
    callback: (arg) => void) {
    const confBox  = this.dialog.open(ConfirmationBoxComponent, {
      data: {
        title,
        message,
        disableClose: true
      }
    });
    confBox.afterClosed().subscribe(callback)
  }
}
