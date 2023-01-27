import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NftMeService } from 'src/app/services/nft-me.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public cartItemsCount = 0;
  constructor(public router: Router, private nftService: NftMeService) {}
  ngOnInit() {
    this.nftService.$checkoutData.subscribe((data) => {
      this.cartItemsCount = data || 0;
    });
  }

  public navbarLinks = [
    {
      name: 'Shop',
      route: '/login/shop',
    },
    {
      name: 'Checkout',
      route: '/login/checkout',
    },
  ];
}
