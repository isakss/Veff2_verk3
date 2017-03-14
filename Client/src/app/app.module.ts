import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { SellersService } from './sellers.service';
import { EditComponent } from './edit/edit.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { ProductComponent } from './product-dlg/product-dlg.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    EditComponent,
    AllProductsComponent,
    TopProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
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
  entryComponents: [EditComponent, AllProductsComponent, TopProductsComponent, ProductComponent]
})
export class AppModule { }
