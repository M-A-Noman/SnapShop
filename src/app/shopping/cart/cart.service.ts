//check start
import { Injectable } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Cart, Key, CartProduct } from './cart.model';
import { Subject, forkJoin, tap } from 'rxjs';
import { Product } from '../../shared/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  changeOnCart = new Subject<Cart[]>();
  cart: Cart[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  setKey(name: string, id: number) {
    let key: Key = { name, id };
    return key;
  }

  isDataInLocalStorage(Key: Key) {
    const value = localStorage.getItem(JSON.stringify(Key));
    return value !== null;
  }
  getCartItemNumber(key: Key) {
    this.getDataFromLocalStorage(key);
    console.log(this.cart);
    return this.getCartItems().length;
  }
  private getDataFromLocalStorage(key: Key) {
    const value = localStorage.getItem(JSON.stringify(key));
    this.cart = JSON.parse(value);
    console.log('Data from localStorage');
  }

  private getDataFromAPI(userId: number) {
    this.dataService.getSingleUserCart(userId).subscribe((res: Cart[]) => {
      this.cart = res;
      console.log('Data from API');
      const requests = [];

      for (let item of this.cart) {
        for (let product of item.products) {
          requests.push(
            this.dataService.getSingleProduct(product.productId).pipe(
              tap((productDetails: Product) => {
                product.image = productDetails.image;
                product.price = productDetails.price;
                product.name = productDetails.title;
                product.saveForCheckout = false;
              })
            )
          );
        }
      }

      forkJoin(requests).subscribe(() => {
        console.log('All product details fetched');
        let key = this.setKey('cart', userId);
        this.saveDataInLocalStorage(key);
        this.getDataFromLocalStorage(key);
        this.changeOnCart.next(this.cart);
      });
    });
  }

  saveDataInCart(hasData: boolean, key: Key) {
    if (hasData) {
      this.getDataFromLocalStorage(key);
    } else {
      this.getDataFromAPI(key.id);
    }
    this.changeOnCart.next(this.cart);
  }

  saveDataInLocalStorage(key: Key) {
    if (key?.id) {
      console.log('Save in Local');
      console.log(key);
      localStorage.setItem(JSON.stringify(key), JSON.stringify(this.cart));
    }
  }

  addToCart(newCart: Cart, key: Key) {
    let foundItem = false;

    for (let item of this.cart) {
      for (let product of item.products) {
        if (product.productId === newCart.products[0].productId) {
          foundItem = true;
          break;
        }
      }
      if (foundItem) break;
    }

    if (!foundItem) {
      this.cart.push(newCart);
      this.saveDataInLocalStorage(key);
      this.changeOnCart.next(this.cart);
      console.log(this.cart);
      alert('Successfully added to CART');
    } else {
      alert('Already in Cart');
    }
  }

  onCreateCart(product: Product, key: Key) {
    const newCart: Cart = {
      id: Date.now(), // Generate a unique ID for the cart item
      userId: key.id,
      date: new Date().toISOString(),
      products: [
        {
          productId: product.id,
          quantity: 1, // Default quantity is 1
          image: product.image,
          price: product.price,
          name: product.title,
          saveForCheckout: false,
        },
      ],
    };
    this.addToCart(newCart, key);
  }

  getCartItems(): CartProduct[] {
    let cartProduct: CartProduct[] = [];
    for (let item of this.cart) {
      for (let product of item.products) {
        cartProduct.push(product);
      }
    }
    return cartProduct;
  }

  updateLocalCartItems(updatedCartProducts: CartProduct[], key: Key) {
    if (!this.cart) return;
    for (let cart of this.cart) {
      for (let i = 0; i < cart.products.length; i++) {
        let updatedProduct = updatedCartProducts.find(
          (p) => p.productId === cart.products[i].productId
        );
        if (updatedProduct) {
          cart.products.splice(i, 1, updatedProduct);
        }
      }
    }
    this.saveDataInLocalStorage(key);
    this.changeOnCart.next(this.cart);
  }

  deleteCartItem(productId: number, key: Key) {
    for (let cart of this.cart) {
      cart.products = cart.products.filter(
        (product) => product.productId !== productId
      );
    }
    this.cart = this.cart.filter((cart) => cart.products.length > 0);
    this.saveDataInLocalStorage(key);
    this.changeOnCart.next(this.cart);
  }
}
