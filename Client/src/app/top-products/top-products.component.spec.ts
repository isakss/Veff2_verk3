import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductsComponent } from './top-products.component';
import { SellersService, Product } from '../sellers.service';

 const mockService = {
    getProductsSuccess: true,
    getProducts() {

      return {
        subscribe: function(result, error) {
          return result = [{name: "jon", id: 0, price: 1, quantityInStock: 1, quantitySold: 2, imagePath: ""},
          {name: "jon2", id: 1, price: 2, quantityInStock: 1, quantitySold: 1, imagePath: ""}];
        }
      }
    } 
  }

describe('TopProductsComponent', () => {
  let component: TopProductsComponent;
  let fixture: ComponentFixture<TopProductsComponent>;
  let expectedResult: Product[];

  beforeEach(async(() => {
    spyOn(mockService, "getProducts").and.callThrough();

    TestBed.configureTestingModule({
      declarations: [ TopProductsComponent ],
      providers: [{
        provide: SellersService, 
        useValue: mockService
      }]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(TopProductsComponent);
    component = fixture.componentInstance;

    expectedResult = [{name: "jon",
        id: 3,
        price: 0,
        quantityInStock: 0,
        quantitySold: 0,
        imagePath: ""}];
    component.products = expectedResult;
    fixture.detectChanges();

  });

  xit('should sort products', () => {
    mockService.getProducts();

    expect(component.products[0].imagePath).not.toBe("");

  });


  it('should create', () => {
    expect(component).toBeTruthy();
    expect(mockService.getProducts).toHaveBeenCalled();
  });

  it('should sort products by price', () => {
    component.products = [{name: "jon", id: 0, price: 1, quantityInStock: 1, quantitySold: 1, imagePath: ""},
     {name: "jon2", id: 1, price: 2, quantityInStock: 1, quantitySold: 1, imagePath: ""}];
    component.sortByPrice();

    expect(component.products[0].id).toBe(1);
  });

  it('should sort products by quantitySold', () => {
    component.products = [{name: "jon", id: 0, price: 1, quantityInStock: 1, quantitySold: 1, imagePath: ""},
     {name: "jon2", id: 1, price: 2, quantityInStock: 1, quantitySold: 2, imagePath: ""}];
    component.sortByQuantitySold();

    expect(component.products[0].id).toBe(1);
  });
});
