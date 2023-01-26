import { IfStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NftMeService } from 'src/app/services/nft-me.service';
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
  public modalForm: FormGroup = new FormGroup({});

  public userIsValid = true;
  public userData:any = '';

  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<ModalComponent>,
    private nftMeService: NftMeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
    this.page = this.data.page
    this.modalForm = new FormGroup({
      username: new FormControl("",[
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl("",Validators.required),
    });
  }

  close(): void {
    this.nftMeService.postUserLogin(this.modalForm.value).subscribe((res) => {
      console.log('data coming back', res)
      if(res.data.length > 0)
      {
        this.userData = res;
        this.userIsValid = true;
        this.router.navigateByUrl('/shop');
        this.dialogRef.close();
      }else {
        this.userIsValid = false;
      }
    })
    // this.dialogRef.close({
    //     username: this.modalForm.get("username")?.value,
    //     userpassword: this.modalForm.get("password")?.value,
    // });

    // this.dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed', result);

    // });
  }

  signIn() {
    this.page = 'order_detail'
  }

  CloseModal() {
    this.router.navigateByUrl('/confirmation');
    this.dialogRef.close();
  }

  checkout_proceed() {
    this.page = 'confirmation_form'
  }

  onSubmit() {
    console.warn(this.modalForm.value);
  }

}
