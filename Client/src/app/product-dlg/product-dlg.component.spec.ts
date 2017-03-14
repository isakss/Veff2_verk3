import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr'; 


import { ProductComponent } from './product-dlg.component';
import { Product } from '../sellers.service';

const mockActiveModal = {
  dismiss: jasmine.createSpy("dismiss"),
  close: jasmine.createSpy("close")
}

const mockToastr = {
  info: jasmine.createSpy("info"),
  success: jasmine.createSpy("success"),
  error: jasmine.createSpy("error")
}



describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [FormsModule],
      providers: [{
        provide: NgbActiveModal,
        useValue: mockActiveModal
      }, 
      {
        provide: ToastrService,
        useValue: mockToastr
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product =  {name: "jon",
      id: 0,
      imagePath: "",
      price: 0,
      quantityInStock: 0,
      quantitySold: 0
    }

    fixture.detectChanges();
    
  });

  it('should dismiss window on cancel', () => {
    component.onProductCancel();
    expect(mockActiveModal.dismiss).toHaveBeenCalled();
    expect(mockToastr.info).toHaveBeenCalled();
  });

  it('should add product if successful', () => {
    component.onProductOk();
    expect(mockActiveModal.close).toHaveBeenCalled();
    expect(mockToastr.success).toHaveBeenCalled();
  });

  it('should display error if not successful', () => {
    component.product.name = "";
    component.onProductOk();
    expect(mockToastr.error).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});