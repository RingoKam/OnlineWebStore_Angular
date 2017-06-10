import { ProductModel } from './../Interfaces/ProductModel';
import { ShoppinngCartModel } from './../Interfaces/ShoppingCartModel';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../Services/shopping-cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  private cart: Array<ShoppinngCartModel>;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cart = this.shoppingCartService.cart ? Aggregate(this.shoppingCartService.cart) : [];
  }
}

function Aggregate(cart: Array<ProductModel>) {
  const testing = new Map();
  cart.forEach(cartitem => {
    const collection = testing.get(cartitem.name);
    if (!collection) {
      testing.set(cartitem.name, { Product: cartitem, Qty: 1 });
    } else {
      collection.Qty += 1;
    }
  });

  const result: Array<ShoppinngCartModel> = [];
  testing.forEach(cartItem => {
    result.push(cartItem);
  });

  return result;
}
