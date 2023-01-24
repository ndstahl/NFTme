import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() userIsValid = false;


  isLoggedIn = "false";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        page: 'login',
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });
  }

  public LoginUser() {
   
  }
}

