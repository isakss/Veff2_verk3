import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../sellers.service';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-product',
  templateUrl: './product-dlg.component.html',
  styleUrls: ['./product-dlg.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private activeModal: NgbActiveModal, private toastrService: ToastrService) {}
  ngOnInit() {
  }

  onProductCancel(){
    this.activeModal.dismiss();
    this.toastrService.info('Vöru var ekki bætt við', 'Hætt við aðgerð');
  }
  onProductOk(){
    if(this.product.name === "") {
      this.toastrService.error('Nafn vörunnar verður að koma fram!', 'Villa!');
    } 
    else if(isNaN(this.product.price) || this.product.price <= 0) {
      this.toastrService.error('Verð vörunnar er ekki skilgreint rétt!', 'Villa!');
    }
    else if(isNaN(this.product.price)  || this.product.quantityInStock <= 0) {
      this.toastrService.error('Magn vörunnar er ekki skilgreint rétt!', 'Villa!');
    } else {
    this.activeModal.close(this.product);
    this.toastrService.success('Nýrri vöru var bætt við!', 'Aðgerð tókst!');
    }
  }
}