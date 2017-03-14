import { Component, OnInit } from '@angular/core';
import { SellersService, Product } from '../sellers.service';
import { ProductComponent } from '../product-dlg/product-dlg.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {

  products: Product[];
  constructor(private service: SellersService, private modalService: NgbModal) { }

  ngOnInit() {
     this.service.getProducts().subscribe(result => {
      result = result.sort(function(a,b) {
        return a.quantitySold < b.quantitySold ? 1:a.quantitySold > b.quantitySold?-1:0
      });
      result.splice(10);
      for (let i = 0; i < 10; i++) {
          if (result[i].imagePath == "" || result[i].imagePath == undefined) {
            result[i].imagePath = "https://shop.spandex.com/_ui/mobile/theme-blue/images/missing-store-300x300.jpg";
        }
       }
      this.products = result;
    });
  }
   onEditProduct(product: Product) {
      const modalInstance = this.modalService.open(ProductComponent);
      modalInstance.componentInstance.product = product
      modalInstance.result.then(obj => {
      this.service.updateProduct(obj).subscribe(result => {
        console.log("The result: " + result.name);
        });
      }).catch(err => {
        console.log("Edit Dialog virkar ekki :(");
      });
   }

  sortByPrice() {
    this.products = this.products.sort(function(a,b) {
        return a.price < b.price ? 1:a.price > b.price?-1:0
    });  
  }

  sortByQuantitySold() {
    this.products = this.products.sort(function(a,b) {
        return a.quantitySold < b.quantitySold ? 1:a.quantitySold > b.quantitySold?-1:0
    });
  }

}
