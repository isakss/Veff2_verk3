import { Component, OnInit, Input } from '@angular/core';
//import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() {}
    ngOnInit() {
  }

  open() {
   // const modalRef = this.modalService.open(NgbdModalContent);
   // modalRef.componentInstance.name = 'World';
  }
}