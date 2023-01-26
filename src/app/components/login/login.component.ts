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
      if(res.msg){
        this.userIsValid = false;
      } else {
        this.userData = res;
      }
    })
  
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
        if(res.msg){

        }
        this.userData = res;
      })

    });
  }

}

