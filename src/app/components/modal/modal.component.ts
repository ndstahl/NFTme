import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public animal = '';
  public name = '';
  public page = '';
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
    this.page = this.data.page
  }
  close(): void {
    this.dialogRef.close();
  }

  CloseModal() {
    this.close();
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open( {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //
  // }
}
