import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart, Key, CartProduct } from './cart.model';

import { CheckoutService } from '../checkout/checkout.service';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../authentication/login/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartProduct[];
  //cartItems = new BehaviorSubject<CartProduct[]>([]);

  deleteClicked: boolean = false;
  deleteCartId: number = null;
  hasData = false;
  isAuthenticate = true;
  userId: number;
  shippingCharge: number = 24.99;
  cartChangesSubscription: Subscription;
  key: Key;

  constructor(
    private cartService: CartService,
    private checkout: CheckoutService,
    private router: Router,
    private userData:UserService
  ) {}

  ngOnInit(): void {
    if (this.isAuthenticate) {
      if (this.userData.LoggedUserId !== -1) {
        this.userId = this.userData.LoggedUserId;
        console.log(this.userId);
      }
      this.key = this.cartService.setKey('cart', this.userId);
      this.hasData = this.cartService.isDataInLocalStorage(this.key);
      this.cartService.saveDataInCart(this.key)
      this.cartChangesSubscription = this.cartService.changeOnCart.subscribe(
        {
          next: (res) => {
            console.log(res);
          
          this.cartItems = this.cartService.getCartItems(res);
        }}
      );
      // this.cartItems = this.cartService.getCartItems();
      
    }
  }

  calculateSubtotal(): number {
    let subTotal = 0;
    // console.log('Form Cart',this.cartItems);
    this.cartItems.forEach((item) => {
      if (item.saveForCheckout) {
        subTotal += (item.price * item.quantity);
      }
    });
    console.log(subTotal,this.shippingCharge)
    subTotal >= 300 ? this.shippingCharge = 0 : this.shippingCharge=24.99;
    console.log(subTotal,this.shippingCharge)
    return subTotal;
  }

  calculateTotal(): number {
    let subTotal = this.calculateSubtotal();
    return subTotal+( subTotal?this.shippingCharge:0);
  }

  onCheckDeleteCart(productId: number) {
    this.deleteClicked = true;
    this.deleteCartId = productId;
  }

  onDeleteCart(productId: number) {
    this.cartItems = this.cartItems.filter(
      (item) => item.productId !== productId
    );
    this.cartService.deleteCartItem(productId, this.key);
  }

  ConfirmationClicked(status: string) {
    if (status === 'close') {
      this.deleteClicked = false;
    } else {
      if (this.deleteCartId !== null) this.onDeleteCart(this.deleteCartId);
      this.deleteClicked = false;
      this.deleteCartId = null;
    }
  }
  updateCart() {
    
  }

  onCheckout() {
    console.log(this.cartItems);
    let checkout: CartProduct[];
    checkout = this.cartItems.filter((cart) => cart.saveForCheckout);
    console.log(checkout);
    this.checkout.setCheckoutCart(checkout);
    this.router.navigate(['/checkout']);
  }

  onSaveCheckout(id: number) {
    let index = this.cartItems.findIndex((cart) => cart.productId === id);
    this.cartItems[index].saveForCheckout =
      !this.cartItems[index].saveForCheckout;
  }
  ngOnDestroy(): void {
    this.cartChangesSubscription.unsubscribe();
  }
}
