import { Component } from '@angular/core';
import { NftMeService } from 'src/app/services/nft-me.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  public nfts: any[] = [];

  public purchaseItems: any[] = [];

  constructor(private nftMeService: NftMeService) {}

  ngOnInit(): void {
    this.nftMeService.getNftData().subscribe((res: any) => {
      console.log('DATA', res.data);
      this.nfts = res.data;
    });
    // this.nfts = this.nftsMock;
    //this.nftMeService.$nftMeData.next({
    // nfts: this.nftsMock,
    //});
  }
  purchaseNFT(item: any) {
    console.log('item', item);
    this.purchaseItems.push(item);
    this.nftMeService.$nftMeData.next(this.purchaseItems);
    this.nftMeService.$checkoutData.next(this.purchaseItems.length);
  }
}

/*public nftsMock: any[] = [
  {
    id: 1,
    nftimg:
      'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/n2.jpg',
    title: 'ReflectLake Helloe',
    info: 'Where do you go when you to reflect?',
    category: 'nature',
    price: '1bitcoin',
  },
  {
    id: 2,
    nftimg:
      'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/n2.jpg',
    title: 'DayBreak',
    info: 'nftInfo',
    category: 'Animal',
    price: '1bitcoin',
  },
  {
    id: 3,
    nftimg:
      'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/n2.jpg',
    title: 'Ear',
    info: 'nftInfo',
    category: 'Animal',
    price: '1bitcoin',
  },
  {
    id: 4,
    nftimg:
      'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/n2.jpg',
    title: 'DayBreak',
    info: 'nftInfo',
    category: 'Animal',
    price: '1bitcoin',
  },
  {
    id: 5,
    nftimg:
      'https://mpb-site.s3.us-east-2/amazonaws.com/imgs/winter-22/n2.jpg',
    title: 'DayBreak',
    info: 'nftInfo',
    category: 'Animal',
    price: '1bitcoin',
  },
  {
    id: 6,
    nftimg:
      'https://mpb-site.s3.us-east-2/amazonaws.com/imgs/winter-22/n2.jpg',
    title: 'DayBreak',
    info: 'nftInfo',
    category: 'Animal',
    price: '1bitcoin',
  },
]; */
