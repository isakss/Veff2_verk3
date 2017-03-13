import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 

import { EditComponent } from './edit.component';
import { Seller } from '../sellers.service';


const mockActiveModal = {
  dismiss: jasmine.createSpy("dismiss"),
  close: jasmine.createSpy("close")
}

const mockToastr = {
  info: jasmine.createSpy("info"),
  success: jasmine.createSpy("success"),
  error: jasmine.createSpy("error")
}

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
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
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    component.seller =  {name: "jon",
      id: 0,
      imagePath: "",
      category: ""
    }
    fixture.detectChanges();
  });

  it('should dismiss window on cancel', () => {
    component.onCancel();
    expect(mockActiveModal.dismiss).toHaveBeenCalled();
    expect(mockToastr.info).toHaveBeenCalled();
  });

  it('should add seller if successful', () => {
    component.onOk();
    expect(mockActiveModal.close).toHaveBeenCalled();
    expect(mockToastr.success).toHaveBeenCalled();
  });

  it('should display error if not successful', () => {
    component.seller.name = "";
    component.onOk();
    expect(mockToastr.error).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.empty).toEqual(false);
  });
});
