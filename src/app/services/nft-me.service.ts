import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NftMeService {
  public $nftMeData: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private httpClient: HttpClient) { }

  getNftData(): Observable<any>{
    return this.httpClient.get(
      '/api/nfts');
  }

  getUserData(): Observable<any>{
    return this.httpClient.get(
      '/api/users');
  }

  getLoginData(): Observable<any>{
    return this.httpClient.get(
      '/api/login');
  }

  getCheckoutData(): Observable<any>{
    return this.httpClient.get(
      '/api/checkout');
  }

  getShopData(): Observable<any>{
    return this.httpClient.get(
      '/api/shop');
  }

}
