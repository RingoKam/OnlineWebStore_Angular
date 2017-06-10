import { ShoppinngCartModel } from './../Interfaces/ShoppingCartModel';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../Services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private cart: Array<ShoppinngCartModel>;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
     this.cart = this.shoppingCartService.cart;
  }
}
