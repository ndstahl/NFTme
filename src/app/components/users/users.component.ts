import { Component } from '@angular/core';
import { NftMeService } from 'src/app/services/nft-me.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

public users: any[] = [];
public id = '';
public username = '';
public password = '';
public userimg = '';
public userIsValid = false;
constructor(private nftMeService: NftMeService) {}

  ngOnInit(): void {
    this.nftMeService.$nftMeData.subscribe((data: any) => {
      this.users = data.users;
      this.id = data.id;
      this.username = data.username;
      this.password = data.password;
      this.userimg = data.userimg;
    })
  }

  LoginUser() {
  
  }
}
