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
  empty = false;

  constructor(private activeModal: NgbActiveModal, private toastrService: ToastrService) {}
  ngOnInit() {
     
  }

  onCancel(){
    this.activeModal.dismiss();
  }
  onOk(){
    if(this.seller.name === "") {
      this.empty = true;
      this.toastrService.error('Nafn þarf að koma fram!', 'Villa!');
    } else {
      this.activeModal.close(this.seller);
      this.toastrService.success('The seller was added/edited!', 'Success!');
    } 
  }
}