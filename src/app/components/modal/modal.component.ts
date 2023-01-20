import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  public animal = "";
  public name = "";

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  close(): void {
    this.dialogRef.close();
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open( {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   
  // }

}