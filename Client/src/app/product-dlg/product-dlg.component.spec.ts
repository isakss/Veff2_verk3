import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductComponent } from './product-dlg.component';
import { SellersService, Seller, Product } from '../sellers.service';

const mockActiveModal = {
 // name: "jon",
  dismiss(name: "jon") {
  }
}

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let product: Product;

  

  product.name = "jon";
  product.id = 0;
  product.imagePath = "";
  product.quantityInStock = 0;
  product.quantitySold = 0;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [FormsModule],
      providers: [{
        provide: NgbActiveModal,
        useValue: mockActiveModal
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});