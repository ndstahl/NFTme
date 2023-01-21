import { Component, OnInit } from '@angular/core';
import { NftMeService } from 'src/app/services/nft-me.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})
export class NftsComponent implements OnInit{

  public nfts: any[] = [];
  public id = '';
  public nftimg = '';
  public title = '';
  public info = '';
  public category = '';


  constructor(private nftMeService: NftMeService) {}

  ngOnInit(): void {
    this.nftMeService.$nftMeData.subscribe((data: any) => {
      this.nfts = data.nfts;
      this.id = data.id;
      this.nftimg = data.nftimg;
      this.title = data.title;
      this.info = data.info;
      this.category = data.category;
    })
  }
}
