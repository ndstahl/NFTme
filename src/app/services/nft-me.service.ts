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

  deleteNftData(): Observable<any>{
    return this.httpClient.delete(
      '/api/nfts');
  }

  getUserData(): Observable<any>{
    return this.httpClient.get(
      '/api/users');
  }

  postUserLogin(userCredentials: any): Observable<any> {
    return this.httpClient.post(
      '/api/login',userCredentials
    )
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
