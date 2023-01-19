import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public navbarLinks = [
    {
      name: 'Shop',
      route: '/login/shop'
    },
    {
      name: 'Checkout',
      route: '/login/checkout'
    }
  ];

}
