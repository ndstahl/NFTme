import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';


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

  constructor(public dialog: MatDialogModule) { }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open( {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}