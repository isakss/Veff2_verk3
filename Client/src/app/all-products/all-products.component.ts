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
      this.products = result;
    });
  }

}
