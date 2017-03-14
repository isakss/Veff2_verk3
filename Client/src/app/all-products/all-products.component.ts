import { Component, OnInit } from '@angular/core';
import { SellersService, Product, Seller } from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from '../product-dlg/product-dlg.component';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  seller: Seller;
  products: Product[];

  constructor(private service: SellersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getProducts().subscribe(result => {
       for (let i = 0; i < result.length; i++) {
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

}
