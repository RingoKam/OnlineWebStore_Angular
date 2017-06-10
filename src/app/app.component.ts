import { ProductModel } from './Interfaces/ProductModel';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './Services/shopping-cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private cart;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.cart = this.shoppingCartService.cart;
  }

  // AddToCart(product: ProductModel) {
  //   this.shoppingCartService.AddToCart(product);
  // }

  // CheckOut() {
  //   this.shoppingCartService.CheckoutCart();
  // }
}
