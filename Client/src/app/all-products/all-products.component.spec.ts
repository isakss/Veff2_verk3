import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate';
import { Http } from '@angular/http';
import { NgbTabset, NgbTab, NgbModal, NgbAlert, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

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
      imports: [
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/i18n', '.json'),
            deps: [Http]
        })
      ],
      providers: [{
        provide: SellersService, 
        useValue: mockService
      }, NgbModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    this.name = "jon";
  });

  it('should display a list of all products', () => {
    expect(component.seller).toBeUndefined();
  });

  xit('should set imagePath if empty', () => {
    spyOn(mockService, "getProducts").and.callThrough();
    expect(mockService.getProducts).toHaveBeenCalled();
    expect(component.products.length).toEqual(1);
    expect(component.products[0].imagePath).not.toEqual("");
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
