import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ToasterModule, ToasterService} from 'angular2-toaster';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { SellersService } from './sellers.service';
import { EditComponent } from './edit/edit.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { TopProductsComponent } from './top-products/top-products.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    EditComponent,
    AllProductsComponent,
    TopProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent

  },
  {
    path: 'details',
    component: DetailsComponent
  }])
  ], 
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [EditComponent]
})
export class AppModule { }
