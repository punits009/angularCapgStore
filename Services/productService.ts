import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { Product } from "../models/product";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    
    url: string = "http://localhost:5000";

    constructor(private http: HttpClient){

    }

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.url+"/getproducts");
    }
}