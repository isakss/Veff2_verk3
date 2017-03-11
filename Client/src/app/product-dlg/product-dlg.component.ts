import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SellersService, Seller } from '../sellers.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-dlg.component.html',
  styleUrls: ['./product-dlg.component.css']
})
export class ProductComponent implements OnInit {

  
  constructor(private activeModal: NgbActiveModal ) {}
    ngOnInit() {
     
  }

  onCancel(){
    this.activeModal.dismiss();
  }
  onOk(){
    this.activeModal.close(this.product);
  }
}