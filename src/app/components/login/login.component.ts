import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NftMeService } from 'src/app/services/nft-me.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userIsValid = true;
  public userData: any = '';
  public userForm: FormGroup = new FormGroup({});


  constructor(public dialog: MatDialog, private nftMeService: NftMeService) { }

  ngOnInit(): void {
    this.nftMeService.postUserLogin(this.userData).subscribe((res) => {
      console.log('data coming back', res)
      this.userData = res;
    })
      this.buildUserForm();
  
  }

  public buildUserForm() {
    this.userForm = new FormGroup({
        username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', Validators.required),
    });
  }



  public openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        page: 'login',
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.nftMeService.postUserLogin(result).subscribe((res) => {
        console.log('data coming back', res)
        this.userData = res;
      })

    });
  }

  public ValidateUser() {
   if(this.userData.username === "Caylee" && this.userData.userpassword === "nftme") {

    this.userIsValid === true;
    console.log('aare you validddddd',this.userIsValid);
   } else {
    this.userIsValid === false;
    console.log('aare you validddddd',this.userIsValid);
   }
  }
}

