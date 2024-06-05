
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart, CartKey, CartProduct } from './cart.model';


import { CheckoutService } from '../checkout/checkout.service';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartProduct[];
  //cartItems = new BehaviorSubject<CartProduct[]>([]);

  deleteClicked: boolean = false;
  deleteCartId: number = null;  
  hasData = false;
  isAuthenticate = true;
  userId: number = 3;

  cartKey: CartKey = {
    name: 'cart',
    id: this.userId
  };


  

  constructor(private cartService: CartService,
    private checkout: CheckoutService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if (this.isAuthenticate) {
      this.cartService.setCartKey('cart', this.userId);
      this.hasData = this.cartService.isDataInLocalStorage();
      this.cartService.saveDataInCart(this.hasData, this.userId);
      this.cartItems = this.cartService.getCartItems();
    }
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    this.cartItems.forEach((item) =>
    {
      if (item.saveForCheckout) { subtotal += item.price * item.quantity; }
    });
    return subtotal;
  }

  calculateTotal(): number {
    return this.calculateSubtotal();
  }

  onCheckDeleteCart(productId: number) {
    this.deleteClicked = true;
    this.deleteCartId = productId;
  }

  onDeleteCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.cartService.deleteCartItem(productId);
  }

  ConfirmationClicked(status: string) {
    if (status === 'close') {
      this.deleteClicked = false;
    } else {
      this.onDeleteCart(this.deleteCartId);
      this.deleteClicked = false;
      this.deleteCartId = null;
    }
  }
  updateCart() {
    
  }

  onCheckout() {
    console.log(this.cartItems);
    let checkout: CartProduct[];
    checkout = this.cartItems.filter(cart => cart.saveForCheckout);
    console.log(checkout)
    this.checkout.setCheckoutCart(checkout);
    this.router.navigate(['/checkout'])

  }

  onSaveCheckout(id:number) {
    let index = this.cartItems.findIndex(cart => cart.productId === id);
    this.cartItems[index].saveForCheckout = !this.cartItems[index].saveForCheckout;
  }

}

