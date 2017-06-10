import { ProductModel } from './Interfaces/ProductModel';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ShoppingCartService } from './Services/shopping-cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private cart;

  constructor(private shoppingCartService: ShoppingCartService) {
  }


  // AddToCart(product: ProductModel) {
  //   this.shoppingCartService.AddToCart(product);
  // }

  // CheckOut() {
  //   this.shoppingCartService.CheckoutCart();
  // }
}
