import { Component, OnInit } from '@angular/core';
import { NgbTab, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from 'ng2-translate';

import { SellersService, Seller, Product } from '../sellers.service';
import { ProductComponent } from '../product-dlg/product-dlg.component';
import { AllProductsComponent } from '../all-products/all-products.component';
import { TopProductsComponent } from '../top-products/top-products.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  seller: Seller;
  products: Product[];

  
  constructor(private translate: TranslateService, private service: SellersService, private modalService: NgbModal) { }

  ngOnInit() {

      this.translate.addLangs(["en", "is"]);
      this.translate.setDefaultLang("is");
  
     this.service.getSellerById().subscribe((result => {
        this.seller = result;
        this.service.getProducts().subscribe(result => {
          this.products = result;
        });
    }));
  }

  addProduct() {
    const modalInstance = this.modalService.open(ProductComponent);
    modalInstance.componentInstance.product = {
      name: "Batman bolur",
      price: 2500,
      quantityInStock: 1,
      imagePath: ""
    }

     modalInstance.result.then(obj => {
      this.service.newProduct(obj).subscribe(result => {
        console.log("The result: " + obj.name);
    });
    }).catch(err => {
      console.log("Dialog lokað");
    });
  }

}

