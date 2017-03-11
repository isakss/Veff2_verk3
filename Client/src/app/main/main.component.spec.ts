import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbTabset, NgbTab, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

import { MainComponent } from './main.component';
import { SellersService } from '../sellers.service';

const mockService = {
  getSellersSuccess: true,
  getSellers: function() {
    return {
      subscribe: function(success, error) {
        if(mockService.getSellersSuccess === true) {
          success();
        }
        else {
          error();
        }
      }
    }

  },
  updateSeller: function() {

  },
  newSeller: function() {

  }

}

const mockModal = {
  open: function() {

  }
}

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ], 
      imports: [
        RouterTestingModule
      ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      },
      {
        provide: NgbModal,
        useValue: mockModal
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
