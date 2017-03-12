import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
        provide: NgbTabset

      }
      ]
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
