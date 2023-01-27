import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NftMeService } from 'src/app/services/nft-me.service';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  public nfts: any[] = [];

  public isCheckout = true;
  constructor(private nftMeService: NftMeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.nftMeService.$nftMeData.subscribe((data) => {
      this.nfts = data;
    });
  }
  public openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        page: 'checkout',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });
  }

  removeFromCart(idx: number) {
    this.nfts.splice(idx, 1);
    this.nftMeService.$checkoutData.next(this.nfts.length);
  }
}
