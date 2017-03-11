import { Component, OnInit } from '@angular/core';
import { SellersService, Product } from '../sellers.service';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {

  products: Product[];
  constructor(private service: SellersService) { }

  ngOnInit() {
     this.service.getProducts().subscribe(result => {
      result = result.sort(function(a,b) {
        return a.quantitySold < b.quantitySold?1:a.quantitySold > b.quantitySold?-1:0
      });
      result.splice(10);
      this.products = result;
    });
  }

}
