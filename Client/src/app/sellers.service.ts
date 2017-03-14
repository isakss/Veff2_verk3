import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx';


export interface Seller {
  id: number;
  name: string;
  category: string;
  imagePath: string;
}

export interface Product {
    id: number,
    name: string,
		price: number,
		quantitySold: number,
		quantityInStock: number,
    imagePath: string
}

@Injectable()
export class SellersService {

  id: number;
  //seller: Seller;
  
  constructor(private http: Http) { }

  getSellers() : Observable<Seller[]> {

    return this.http.get("http://localhost:5000/api/sellers")
    .map(response => {
      return <Seller[]> response.json();
    });
  }

  getSellerById(): Observable<Seller> {

    return this.http.get('http://localhost:5000/api/sellers/' + String(this.id))
    .map(response => {
      return <Seller> response.json();
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('http://localhost:5000/api/sellers/' + String(this.id) + '/products')
    .map(response => {
      return <Product[]> response.json();
    });
  }

  updateSeller(seller: Seller) : Observable<Seller> {
    let sellerString = JSON.stringify(seller);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    return this.http.put(('http://localhost:5000/api/sellers/' + String(seller.id)), seller)
    .map(response => response.json());

  }

  newSeller(body: any) : Observable<Seller> {
    let bodyString = JSON.stringify(body);
    let headers    = new Headers({ 'Content-Type': 'application/json' });
    let options    = new RequestOptions({ headers: headers });
    console.log(body);

    return this.http.post("http://localhost:5000/api/sellers", body, options)
    .map(response => response.json());
    //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }  

  newProduct(body: any) : Observable<Product> {
    let bodyString = JSON.stringify(body);
    let headers    = new Headers({ 'Content-Type': 'application/json' });
    let options    = new RequestOptions({ headers: headers });
    console.log(body);

    return this.http.post('http://localhost:5000/api/sellers/'+ String(this.id) + '/products', body, options)
    .map(response => response.json())
    //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }  
  
  
}
