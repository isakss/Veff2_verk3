import { Component, OnInit } from '@angular/core';
import { SellersService, Product, Seller } from '../sellers.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  seller: Seller;
  products: Product[];

  constructor(private service: SellersService) { }

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
