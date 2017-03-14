import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductsComponent } from './top-products.component';
import { SellersService, Product } from '../sellers.service';

 const mockService = {
    getProductsSuccess: true,
    getProducts() {

      return {
        subscribe: function(result, error) {
        /* length = 3;
          if(mockService.getProductsSuccess === true) {
            result();
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

  it('should sort products', () => {
   // result.sort();
    let array: Product[];

    mockService.getProducts().subscribe((result: Product[]) => array = result, (error: any) => false);
    

   // expect(array.sort).toHaveBeenCalled();


    /*mockService.connection.subscribe (
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: [{
              name: "jon",
              id: 0,
              imagePath: "",
              quantityInStock: 0,
              quantitySold: 0   
            }]
          })));
      });

      mockService.getProducts().subscribe((result: Product[]) => {
        expect(result.length).toBe(1);
        expect(result[0].name).toBe("jon");
      })*/

  });

  /*it('should have products equal the subscribe result', () => {
    const input = []
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(mockService.getProducts).toHaveBeenCalled();
  });
});
