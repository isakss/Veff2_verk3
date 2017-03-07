import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {NgbModal, NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { SellersService } from './sellers.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent

  }])
  ], 
  providers: [SellersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
