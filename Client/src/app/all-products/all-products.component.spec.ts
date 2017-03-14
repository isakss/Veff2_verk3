import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsComponent } from './all-products.component';
import { SellersService } from '../sellers.service';

describe('AllProductsComponent', () => {
  let component: AllProductsComponent;
  let fixture: ComponentFixture<AllProductsComponent>;

  const mockService = {
    getProductsSuccess: true,
    getProducts: function() {
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

  it('should display a list of all products', () => {
    component.ngOnInit();
    //expect(component.ngOnInit.).toBeTruthy();
    expect(component.seller).toBeUndefined();
  });
});
