import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SellersService, Seller } from '../sellers.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  seller: Seller;

  constructor(private activeModal: NgbActiveModal, private toastrService: ToastrService) {}
  ngOnInit() {
     
  }

  onCancel(){
    this.activeModal.dismiss();
    this.toastrService.info('Seljanda var ekki bætt í hópinn', 'Hætt við aðgerð');
  }
  onOk(){
    if(this.seller.name === "") {
      this.toastrService.error('Nafn þarf að koma fram!', 'Villa!');
    } else {
      this.activeModal.close(this.seller);
      this.toastrService.success('Seljendur voru uppfærðir!', 'Aðgerð tókst!');
    } 
  }
}