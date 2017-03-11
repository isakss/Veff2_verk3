import { Component, OnInit } from '@angular/core';
import { NgbTabset, NgbTab, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellersService, Seller } from '../sellers.service';
import { ProductComponent } from '../product-dlg/product-dlg.component';
import { AllProductsComponent } from '../all-products/all-products.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  seller: Seller;
 
  
  constructor(private service: SellersService, private modalService: NgbModal) { }

  ngOnInit() {
     this.service.getSellerById().subscribe(result => {
      this.seller = result;
      console.log(this.seller.name);
    });
  }

  addProduct() {
    const modalInstance = this.modalService.open(ProductComponent);
    modalInstance.componentInstance.seller = {
      name: "Jon",
      category: "Business",
      imagePath: "https://www.timeshighereducation.com/Pictures/web/r/m/v/Meme___lazy_senior.jpg"
    }


}

