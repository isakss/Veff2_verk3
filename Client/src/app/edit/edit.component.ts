import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { Seller } from '../sellers.service';
import { SellersService, Seller } from '../sellers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  seller: Seller;
  constructor(private activeModal: NgbActiveModal ) {}
    ngOnInit() {
     
  }

  onCancel(){
    this.activeModal.dismiss();
  }
  onOk(){
    this.activeModal.close(this.seller);
  }

 
  open() {
   // const modalRef = this.modalService.open(NgbdModalContent);
   // modalRef.componentInstance.name = 'World';
  }
}