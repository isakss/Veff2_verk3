import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SellersService, Seller } from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from '../edit/edit.component';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private sellers: Seller[];

  constructor(private service : SellersService, private modalService: NgbModal, private router: Router, private toastrService : ToasterService) { }

 
  ngOnInit() {

    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });
  }

  goToDetails(id: number) {
    this.service.id = id;
    this.router.navigate(["details"]);
  }

   onEdit(seller: Seller) {
      const modalInstance = this. modalService.open(EditComponent);
      modalInstance.componentInstance.seller = seller
      modalInstance.result.then(obj => {
        console.log("Edit Dialog virkar!");
        console.log("hi" + obj.name);
     // console.log(modalInstance.componentInstance.seller);
      this.service.updateSeller(obj).subscribe(result => {
        console.log("The result: " + result.name);
        });
      }).catch(err => {
        console.log("Edit Dialog virkar ekki :(");
      });
      
  }

   addSeller() {
    const modalInstance = this. modalService.open(EditComponent);
    modalInstance.componentInstance.seller = {
      name: "Jon",
     // id: 2,
      category: "Business",
      imagePath: "https://www.timeshighereducation.com/Pictures/web/r/m/v/Meme___lazy_senior.jpg"
    }
         // console.log(modalInstance.componentInstance.seller + "hi");

    //Passa að taka afrit af gögnunum svo notandi geti ekki ýtt á cancel í miðjunni og týnt þá gögnunum sem voru komin inn
    modalInstance.result.then(obj => {
      console.log("Dialog virkar!");
      console.log("hi" + obj.name);
     // console.log(modalInstance.componentInstance.seller);
      this.service.newSeller(obj).subscribe(result => {
      console.log("The result: " + result.name);
    });
    }).catch(err => {
      console.log("Dialog virkar ekki :(");
    });

  }

}


