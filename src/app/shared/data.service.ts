import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./../Shared/product.model";
import { Cart } from "../Shopping/cart/cart.model";
import { Subject, catchError, tap, throwError } from "rxjs";

 
@Injectable({
    providedIn:'root'
})
export class DataService{



  productDetailsSort = new Subject<any>();



   
    constructor(private http:HttpClient) { }
   
    getAllProducts() {
        return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
            tap((products:Product[]) => {
                // this.productDetails.next(products);
            })
        )
    }



    getLimitedProducts(limit: number) {
        const url = `https://fakestoreapi.com/products?limit=${limit}`;
    
        return this.http.get<Product[]>(url).pipe(
            tap((products: Product[]) => {
                // console.log(products);
            }),
            catchError(error => {
                console.error('Error fetching products:', error);
                return throwError(error);
            })
        );
    }

    getSingleProduct(id: number) {
        return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
    }

    getAllCategories() {
        return this.http.get(`https://fakestoreapi.com/products/categories`);
        
    }

    getProductsOfCategory(categoryName: string) {
        return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${categoryName}`).pipe(
            tap((product: Product[]) => {
                console.log(product);
            })
        )
    }

    getSingleUserCart(id:number) {
        return this.http.get<Cart[]>(`https://fakestoreapi.com/carts/user/` + id.toString()).pipe(
            tap((cart: Cart[]) => {
                console.log(cart);
            })
        )
    }
    //for sorting by ratting

    private sortAndEmitProducts(products: Product[]) {
        products.sort((a, b) => b.rating.rate - a.rating.rate); 
        this.productDetailsSort.next(products); 
    }



    getLimitedProductsAddingDiscount(limit: number) {
        const url = `https://fakestoreapi.com/products?limit=${limit}`;
    
        return this.http.get<Product[]>(url).pipe(
            tap((products: Product[]) => {
                
                this.sortAndEmitProducts(products);
            }),
            catchError(error => {
                console.error('Error fetching products:', error);
                return throwError(error);
            })
        );
    }

    getRandomDiscount() {
        return 5 + Math.floor(Math.random() * 21);
      }








 
}