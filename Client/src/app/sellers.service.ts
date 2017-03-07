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

@Injectable()
export class SellersService {

  constructor(private http: Http) { }

  getSellers() : Observable<Seller[]> {

    return this.http.get("http://localhost:5000/api/sellers")
    .map(response => {
      return <Seller[]> response.json();
    });
  }

  getSellerById(id: number): Observable<Seller> {

    return this.http.get('http://localhost:5000/api/sellers/' + id)
    .map(response => {
      return <Seller> response.json();
    });
  }

  newSeller(body: any) : Observable<Seller> {
    console.log("fer eg hingad?");
   // body.name = "karen";
    let bodyString = JSON.stringify(body);
    let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options    = new RequestOptions({ headers: headers }); // Create a request option
    console.log(body);

    return this.http.post("http://localhost:5000/api/sellers", body, options) // ...using post request
    .map(response => response.json()) // ...and calling .json() on the response to return data
    //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   
   /* return this.http.post("http://localhost:5000/api/sellers")
    .map(response => {

    });
  }*/

}
