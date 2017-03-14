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
 // id: number;
 // product: {
    id: number,
    name: string,
		price: number,
		quantitySold: number,
		quantityInStock: number,
    imagePath: string
  //}
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
    let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options    = new RequestOptions({ headers: headers }); // Create a request option
    console.log(body);

    return this.http.post("http://localhost:5000/api/sellers", body, options) // ...using post request
    .map(response => response.json()) // ...and calling .json() on the response to return data
    //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }  

  newProduct(body: any) : Observable<Seller> {
    let bodyString = JSON.stringify(body);
    let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options    = new RequestOptions({ headers: headers }); // Create a request option
    console.log(body);

    return this.http.post('http://localhost:5000/api/sellers/'+ String(this.id) + '/products', body, options) 
// ...using post request
    .map(response => response.json()) // ...and calling .json() on the response to return data
    //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }  
  updateProduct(product: Product) : Observable<Product> {
    let sellerString = JSON.stringify(product);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    return this.http.put(('http://localhost:5000/api/sellers/' + String(this.id)) + '/products' + String(product.id), product)
    .map(response => response.json());

  }
  
  
}
