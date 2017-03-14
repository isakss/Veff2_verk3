import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbTabset, NgbTab, NgbModal, NgbAlert, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate';
import { Http } from '@angular/http';

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
  updateSeller: function(seller) {

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
      declarations: [ MainComponent, NgbAlert ], 
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        })
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
      }, NgbAlert, NgbAlertConfig]
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should navigate to details', () => {
      component.goToDetails(2);
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    xit('should call modalService.open', () => {
      component.onEdit(mockService.sellersList[0]);
      //let seller = mockService.sellersList[0];
      //expect(mockRouter.navigate).toHaveBeenCalled();
      expect(mockService.getSellers).toHaveBeenCalled();
        
    });
   

    xit('should call open edit component', () => {
      component.addSeller();
      let seller = mockService.sellersList[0];
      //expect(mockService.updateSeller).arguments(seller);
      expect(mockRouter.navigate).toHaveBeenCalled();
     //expect(component.modalService.open()).toHaveBeenCalled();
     let result = mockService.updateSeller(seller);
     expect( console.log).toHaveBeenCalledWith(result);
      
    });

    it('should create', () =>{
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });