import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
//import { Seller } from '../edit/edit.component';

/*export class Seller {
  name: string;
  id: number;
  category: string;
  imagePath: string;
}*/

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  seller: Seller;
  
  constructor(private service: SellersService) { }

  ngOnInit() {
     this.service.getSellerById().subscribe(result => {
      this.seller = result;
      console.log(this.seller.name);
    });
  }

}
