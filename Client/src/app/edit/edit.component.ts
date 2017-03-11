import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
}