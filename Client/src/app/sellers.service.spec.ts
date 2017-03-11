import { TestBed, inject } from '@angular/core/testing';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { SellersService } from './sellers.service';

const mockHttp = {

}
const mockService = {
  
}

describe('SellersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: SellersService,
        useValue: mockService 
      },
    {
      provide: Http,
      useValue: mockHttp
    }]
    });
  });

  it('should ...', inject([SellersService], (service: SellersService) => {
    expect(service).toBeTruthy();
  }));
});
