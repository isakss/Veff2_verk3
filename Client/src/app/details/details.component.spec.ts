import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateRef } from '@angular/core';
import { NgbTabset, NgbTab, NgbModal, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

import { DetailsComponent } from './details.component';
import { AllProductsComponent } from '../all-products/all-products.component';
import { TopProductsComponent } from '../top-products/top-products.component';
import { SellersService, Product } from '../sellers.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  const mockService = {
    getSellerSuccess: true,
    getProducts: function() {
       return {
         length: 1,
      subscribe: function(success, error) {
        if(mockService.getSellerSuccess === true) {
          success();
        }
        else {
          error();
        }
      }
       }

    },
    newProduct: function() {
      return {
        subscribe: function(success, error) {
        /* length = 3;
          if(mockService.getProductsSuccess === true) {
            success();
          }
          else {
            error();
          }*/
        }
      }
    },
    getSellerById: function() {
      return {
        subscribe: function(success, error) {

        }
      }
  }
}

 const mockModal = {
    open: function() {}
  }

  const mockTabset = {
    ngbTabTitle: "product",
    ngbTabContent: "content"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent, AllProductsComponent, NgbTab, NgbTabset, TopProductsComponent ],
      providers: [{
        provide: SellersService, 
        useValue: mockService
      },
      {
        provide: NgbModal,
        useValue: mockModal,
      },
      {
        provide: NgbTabsetConfig,
        useValue: mockTabset
      },
      {
        provide: NgbTabset,
        useValue: mockTabset
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
