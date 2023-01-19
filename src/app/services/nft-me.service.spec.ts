import { TestBed } from '@angular/core/testing';

import { NftMeService } from './nft-me.service';

describe('NftMeService', () => {
  let service: NftMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
