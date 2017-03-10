import { Component, OnInit } from '@angular/core';
import { NgbTabset, NgbTab } from '@ng-bootstrap/ng-bootstrap';
import { SellersService, Seller } from '../sellers.service';


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

