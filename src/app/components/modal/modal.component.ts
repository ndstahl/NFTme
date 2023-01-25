import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    public router: Router,
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

  signIn() {
    this.page = 'order_detail'
  }

  CloseModal() {
    this.close();
  }

  checkout_proceed() {
    this.page = 'confirmation_form'
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open( {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //
  // }
}
