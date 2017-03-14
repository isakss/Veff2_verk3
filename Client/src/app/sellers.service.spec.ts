import { TestBed, inject } from '@angular/core/testing';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FakeBackend } from 'ngx-http-test';

import { SellersService, Seller, Product } from './sellers.service';

const mockHttp = {
  get: jasmine.createSpy("get"),
  put: jasmine.createSpy("put"),
  post: jasmine.createSpy("post")
}

describe('SellersService', () => {
let backend: FakeBackend;
let subject: SellersService;
let seller: Seller;
let product: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
      {
        provide: SellersService,
        useValue: SellersService 
      }, SellersService, MockBackend, FakeBackend.getProviders()
      ]
    });
  });
  beforeEach(inject([FakeBackend, SellersService], (fakeBackend, service) => {
    backend = fakeBackend;
    subject = service;

    seller = { id: 1,
       name: "jon",
       category: "Business",
       imagePath: ""
    };

    product = {id: 1,
      name: "jon",
      price: 1000,
      quantitySold: 1,
      quantityInStock: 1,
      imagePath: ""
    };

  }))

it('getSellers should return sellers', (done) => {
  backend.expectGet("http://localhost:5000/api/sellers").respond({ name: 'jon'});

  subject.getSellers().subscribe((response) => {
    expect(response).toEqual({name: 'jon'});
    done();
  })

  });
  it('should ...', inject([SellersService], (service: SellersService) => {
    expect(service).toBeTruthy();
  }));

  it('getSellerById should return a seller', (done) => {
    subject.id = 3;
  backend.expectGet('http://localhost:5000/api/sellers/' + String(3)).respond({ name: 'jon'});

  subject.getSellerById().subscribe((response) => {
    expect(response).toEqual({name: 'jon'});
    done();
  })

});

it('getProducts should return products', (done) => {
  subject.id = 3;
  backend.expectGet('http://localhost:5000/api/sellers/' + String(3) + '/products').respond({ name: 'jon', quantityInStock: 3});

  subject.getProducts().subscribe((response) => {
    expect(response).toEqual({name: 'jon', quantityInStock: 3});
    done();
  })

});

it('updateSeller should update the seller', (done) => { 
  backend.expectPut(('http://localhost:5000/api/sellers/' + String(seller.id)), seller).respond({ name: 'jona'});

  subject.updateSeller(seller).subscribe((response) => {
    expect(response).toEqual({name: 'jona'});
    done();
  })

});

it('newSeller should add a seller', (done) => {
  backend.expectPost(("http://localhost:5000/api/sellers"), seller).respond({ name: 'jona'});

  subject.newSeller(seller).subscribe((response) => {
    expect(response).toEqual({name: 'jona'});
    done();
  })

});

it('newProduct should add a product', (done) => {
  subject.id = 3;
  backend.expectPost(('http://localhost:5000/api/sellers/'+ String(subject.id) + '/products'), product).respond({ name: 'jona', quantityInStock: 3});

  subject.newProduct(product).subscribe((response) => {
    expect(response).toEqual({name: 'jona', quantityInStock: 3});
    done();
  })

});

});
