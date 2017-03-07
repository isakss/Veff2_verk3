import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SellersService, Seller } from '../sellers.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//import {NgbdModalContent} from './edit';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private sellers: Seller[];

  constructor(private service : SellersService) { }

  ngOnInit() {

    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });
  }


  open() {
    console.log("virkar");
    let seller = {name: "Jon"};
    //const modalRef = this.modalService.open(NgbdModalContent);
   // modalRef.componentInstance.name = 'World';
    this.service.newSeller(seller).subscribe(result => {
      console.log("The result: " + result);
    });
  }

}


