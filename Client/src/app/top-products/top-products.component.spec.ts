import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductsComponent } from './top-products.component';
import { SellersService } from '../sellers.service';

 const mockService = {
    getProductsSuccess: true,
    getProducts: function() {

      return {
        subscribe: function(result, error) {
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

describe('TopProductsComponent', () => {
  let component: TopProductsComponent;
  let fixture: ComponentFixture<TopProductsComponent>;

  beforeEach(async(() => {
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
    fixture.detectChanges();
  });

  /*it('should sort products', () => {
    component.ngOnInit();
    expect(mockService.getProducts).toHaveBeenCalled();

  });*/

  /*it('should have products equal the subscribe result', () => {
    const input = []
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
