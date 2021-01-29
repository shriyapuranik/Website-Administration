import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() columns = [];
  @Input() gridData = [];
  @Input() showLockUnlockButton = false;

  @Output() deleteClick = new EventEmitter();
  @Output() editClick = new EventEmitter();
  @Output() lockUnlockClick = new EventEmitter();

  formGroup = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick(dataItem, rowIndex) {
    this.editClick.emit(dataItem);
  }

  onDeleteClick(dataItem, rowIndex) {
    this.deleteClick.emit(dataItem);
  }

  onLockUnlockClick(dataItem, rowIndex) {
    this.lockUnlockClick.emit(dataItem);
  }

  getButtonName(dataItem) {
    return dataItem.lockUnlockRequest === 'U' ? 'Unlock' : 'Lock'
  }

  public editHandler({sender, rowIndex, dataItem}) {
    // close the previously edited item
    // this.closeEditor(sender);

    // track the most recently edited row
    // it will be used in `closeEditor` for closing the previously edited row
    // this.editedRowIndex = rowIndex;

    // clone the current - `[(ngModel)]` will modify the original item
    // use this copy to revert changes
    // this.editedProduct = Object.assign({}, dataItem);

    // edit the row
    sender.editRow(rowIndex);
}
}
