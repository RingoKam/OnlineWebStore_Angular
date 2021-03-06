import { ProductModel } from './../Interfaces/ProductModel';
import { ShoppinngCartModel } from './../Interfaces/ShoppingCartModel';

import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ShoppingCartService implements OnInit {
  private GetShoppingCartUrl: string;
  private AddShoppingCartUrl: string;
  private CheckoutShoppingCartUrl: string;

  public cart: Array<ProductModel>;

  constructor() { }

  ngOnInit() {
    this.GetShoppingCartUrl = document.getElementById('get-shopping-cart-service-url').dataset.url;
    this.AddShoppingCartUrl = document.getElementById('add-shopping-cart-service-url').dataset.url;
    this.CheckoutShoppingCartUrl = document.getElementById('checkout-shopping-cart-service-url').dataset.url;
  }

  AddToCart(product: ProductModel) {
    if (this.cart) {
      this.cart = [...this.cart, product];
    } else {
      this.cart = [product];
    }
  }

  CheckoutCart() {

  }
}
