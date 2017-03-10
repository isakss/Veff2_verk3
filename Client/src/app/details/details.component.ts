import { Component, OnInit } from '@angular/core';
import { NgbTabset, NgbTab } from '@ng-bootstrap/ng-bootstrap';
import { SellersService, Seller, Product } from '../sellers.service';
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
  
  constructor(private service: SellersService) { }

  ngOnInit() {
     this.service.getSellerById().subscribe(result => {
      this.seller = result;
      this.service.getProducts().subscribe(result => {
        this.products = result;
      });
      console.log(this.seller.name);
    });
  }

  hi(e: any) {
    console.log("hiiiii tehre");
  }

}

