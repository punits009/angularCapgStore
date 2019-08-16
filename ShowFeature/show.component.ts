import { Component } from "@angular/core";
import { ProductService } from "../Services/productService";
import { Product } from "../models/product";

@Component({
    selector: "show",
    templateUrl: "show.component.html"
})
export class Showcomponent{

    constructor(private service: ProductService){
        this.getProducts();
    }   
    

    products: Product[]=[];
    
    getProducts(){
        this.service.getProducts().subscribe(
            res=>{
                console.log("here")
                this.products = res;
                console.log(this.products)
            }
        )
    }
}