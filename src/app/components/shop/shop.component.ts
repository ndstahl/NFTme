import { Component } from '@angular/core';
import { NftMeService } from 'src/app/services/nft-me.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  public nfts: any[] = [];
  
  constructor(private nftMeService: NftMeService) {}

  ngOnInit(): void {

    this.nftMeService.getNftData().subscribe((res:any) => {
      console.log('DATA' , res.data);
      this.nfts = res.data;
      this.nftMeService.$nftMeData.next({
        nfts: res.data,
      });
    });
  }
}
