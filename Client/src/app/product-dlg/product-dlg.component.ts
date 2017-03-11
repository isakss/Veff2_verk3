import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SellersService, Seller, Product } from '../sellers.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-dlg.component.html',
  styleUrls: ['./product-dlg.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private activeModal: NgbActiveModal ) {}
  ngOnInit() {
      /*this.product.name = "jon";
      this.product.id = 0;
      this.product.imagePath = "";
      this.product.quantityInStock = 0;
      this.product.quantitySold = 0;*/
  }

  onProductCancel(){
    this.activeModal.dismiss();
  }
  onProductOk(){
    this.activeModal.close(this.product);
  }
}