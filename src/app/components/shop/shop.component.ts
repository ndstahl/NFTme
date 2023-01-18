import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  
  public nftImg1 = ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg";
  public nftImg2 = "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg";

  public nfts:Array<any> = [
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: "../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg", name: "Name", description: "Description", price: "Price"},
    {img: ".../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg", name: "Name", description: "Description", price: "Price"},
   
  ]
}
