import { Component } from '@angular/core';
import { NftMeService } from 'src/app/services/nft-me.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  public price = "";
  public description = "";
  public name = "";
  public id = ""; 
  public image = "";
  
  constructor(private nftMeService: NftMeService) {}

  ngOnInit(): void {

  }

}
