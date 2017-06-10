import { ShoppingCartService } from './../Services/shopping-cart.service';
import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { ProductModel } from '../Interfaces/ProductModel';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public ProductList: Array<ProductModel>;

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.ProductList = this.productService.getAllProducts();
  }

  @Output()
  AddToCart(product: ProductModel) {
    this.shoppingCartService.AddToCart(product);
  }
}
