import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbTabset, NgbTab, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { MainComponent } from './main.component';
import { SellersService } from '../sellers.service';

const mockService = {
  id: 0,
  getSellersSuccess: true,
  sellersList: [{
    id: 0,
    name: "Jón",
    category: "Business",
    imagePath: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/16684197_10154596068237087_5796024618638752973_n.jpg?oh=4b31842864eef1076f24af3a272c18b5&oe=592C7E5D"
  }],
  getSellers: function() {
    return {
      subscribe: function(success, error) {
        if(mockService.getSellersSuccess === true) {
          success(mockService.sellersList);
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


var mockModal = {
    open: function() {
        return {
           result: {

                then: function(fn) {
                      // Þessi mun virka eins og notandinn ýti alltaf á OK:
                      fn();
                }
           }
        }
   } 
};



describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let mockRouter = { navigate: jasmine.createSpy("navigate")}

  

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
      },
      {
        provide: Router,
        useValue: mockRouter
      }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    //component.modalService = mockModal;
    fixture.detectChanges();
  });

  it('should add seller', () => {
    mockService.getSellersSuccess = true;
    //expect();
   // expect(component.addSeller()).toHaveBeenCalled();
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  describe('when sellers list is called', () => {
    mockService.getSellersSuccess = true;

    //mockService.sellersList = [];
     beforeEach(() => {
      fixture = TestBed.createComponent(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should navigate to details', () => {
      component.goToDetails(mockService.id);
      if(mockService.id != undefined) {
          expect(mockRouter.navigate).toHaveBeenCalled();
      }
    });

    /*it('should call modalService.open', () => {
      component.onEdit(mockService.sellersList[0]);
      let seller = mockService.sellersList[0];
      expect(mockRouter.navigate).toHaveBeenCalled();
     //expect(component.modalService.open()).toHaveBeenCalled();
      
    });*/

    it('should get sellers onInit', () => {
    //  spyOn(mockService, 'getSellers').call(mockService.getSellers());
      //expect(mockService.getSellers).toHaveBeenCalled();

    });
  });
});
