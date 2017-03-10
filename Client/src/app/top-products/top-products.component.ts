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
       console.log(result);
      this.products = result;
             console.log(this.products)

      this.products.sort();
      console.log(result[0].id);
      console.log(this.products[1]);
      /*for (let i = 0; i < this.products.length; i++) {
        console.log(this.products[i].product.name);
      }*/
     /* if(this.products){
        for (let product of this.products) {
        console.log(product.product.name);
      }
      }*/
      
      /*for (var i = 0; i < 10; i++) {
        this.products.push(result[i]);
      }*/
    });
  }

}
