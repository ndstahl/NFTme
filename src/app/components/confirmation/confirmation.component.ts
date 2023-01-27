import { Component } from '@angular/core';
import { NftMeService } from 'src/app/services/nft-me.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  constructor(private nftMeService: NftMeService) {}
  ngOnInit() {
    this.nftMeService.$checkoutData.next(0);
    this.nftMeService.$nftMeData.next([]);
  }
}
