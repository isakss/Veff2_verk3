import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsComponent } from './all-products.component';
import { SellersService, Product } from '../sellers.service';


describe('AllProductsComponent', () => {
  let component: AllProductsComponent;
  let fixture: ComponentFixture<AllProductsComponent>;

  const mockService = {
    getProductsSuccess: true,
    getProducts: function() {
      return {
        subscribe: function(success, error) {
         //length = 3;
         let items = {}
          if(mockService.getProductsSuccess === true) {
            return [{id: 0,
                    name: 'jon',
                    price: 0,
                    quantitySold: 0,
                    quantityInStock: 0,
                    imagePath: ''}]
            
            //success();
          }
          else {
            return error();
          }
        }
      }
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductsComponent ], 
      providers: [{
        provide: SellersService, 
        useValue: mockService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    this.name = "jon";
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set imagePath if empty', () => {
    spyOn(mockService, "getProducts").and.callThrough();
    expect(mockService.getProducts).toHaveBeenCalled();
    expect(component.products.length).toEqual(1);
    expect(component.products[0].imagePath).not.toEqual("");
  });
});
